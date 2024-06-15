/* eslint-disable no-undef */
import Swal from "sweetalert2";
import Cleaning4SoloAPI from "../../data/cleaning4soloAPI";
import { createBlogTableDataItemTemplate } from "../templates/admin-template";
import { showSuccessAlert } from "../../components/allertMessage";

const Trash = {
  async render() {
    return `
      <div class="head-title">
        <div class="left">
          <h1>Trash Panel</h1>
          <ul class="breadcrumb">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li><i class='bx bx-chevron-right' ></i></li>
            <li>
              <a class="active" href="#">Trash</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="form-container container color-text">
        <h2>Add New Trash</h2>
        <form id="addBlogForm">
          <div class="form-group mb-2">
            <label for="blogTitle">Kategori A</label>
            <input type="text" class="form-control" id="blogTitle" name="title" required>
          </div>
          <div class="form-group mb-2">
            <label for="blogTitle">Kategori B</label>
            <input type="text" class="form-control" id="blogTitle" name="title" required>
          </div>
          
          <button type="submit" class="btn-add-blog btn btn-success rounded-pill my-3 px-5 py-2">Add trash</button>
        </form>
      </div>
      <div class="table-data">
        <div class="order">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date Published</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody class="blog-list">
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  async afterRender() {
    tinymce.init({
      selector: "textarea",
      plugins: "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
      toolbar:
        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
    });
    const trashData = await Cleaning4SoloAPI.blogAPI();
    const { trash } = trashData;
    const blogContainer = document.querySelector(".blog-list");
    const buttonAddBlog = document.querySelector(".btn-add-blog");
    const blogTitle = document.querySelector("#blogTitle");
    const imageUrl = document.querySelector("#imageUrl");

    if (trash.length === 0) {
      blogContainer.innerHTML = '<p class="text-center" data-aos="fade-up">Belum ada trash</p>';
    } else {
      trash.forEach((blog) => {
        blogContainer.innerHTML += createBlogTableDataItemTemplate(blog);
      });
    }

    buttonAddBlog.addEventListener("click", async (event) => {
      event.preventDefault();

      const blogContent = tinymce.get("blogContent").getContent();

      try {
        const response = await Cleaning4SoloAPI.createBlog(blogTitle.value, imageUrl.value, blogContent);
        showSuccessAlert(response.message);

        blogTitle.value = "";
        imageUrl.value = "";
        tinymce.get("blogContent").setContent("");
        blogContainer.innerHTML = "";
        const updatedTrash = await Cleaning4SoloAPI.blogAPI();
        updatedTrash.trash.forEach((blog) => {
          blogContainer.innerHTML += createBlogTableDataItemTemplate(blog);
        });
      } catch (error) {
        console.error("Failed to create trash:", error.message);
      }
    });

    document.addEventListener("click", async (event) => {
      if (event.target.classList.contains("btnDeleteBlog")) {
        const blogId = event.target.getAttribute("dataId");

        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel",
          reverseButtons: true,
        });

        if (result.isConfirmed) {
          try {
            // Menghapus blog dari API
            await Cleaning4SoloAPI.deleteBlogId(blogId);
            Swal.fire({
              title: "Deleted!",
              text: "Trash post has been deleted.",
              icon: "success",
            });
            blogContainer.innerHTML = "";
            const updatedTrash = await Cleaning4SoloAPI.blogAPI();
            updatedTrash.trash.forEach((blog) => {
              blogContainer.innerHTML += createBlogTableDataItemTemplate(blog);
            });
          } catch (error) {
            Swal.fire({
              title: "Failed",
              text: `Failed to delete trash post: ${error.message}`,
              icon: "error",
            });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: "Cancelled",
            text: "Your trash post is safe :)",
            icon: "info",
          });
        }
      }
    });
  },
};

export { Trash };
