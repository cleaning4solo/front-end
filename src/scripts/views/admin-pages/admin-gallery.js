/* eslint-disable no-undef */
import Swal from "sweetalert2";
import Cleaning4SoloAPI from "../../data/cleaning4soloAPI";
import { createBlogTableDataItemTemplate } from "../templates/admin-template";
import { showSuccessAlert } from "../../components/allertMessage";

const Gallery = {
  async render() {
    return `
      <div class="head-title">
        <div class="left">
          <h1>Gallery Panel</h1>
          <ul class="breadcrumb">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li><i class='bx bx-chevron-right' ></i></li>
            <li>
              <a class="active" href="#">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="form-container container color-text">
        <h2>Add New Gallery</h2>
        <form id="addBlogForm">
          <div class="form-group mb-2">
            <label for="blogTitle">Title</label>
            <input type="text" class="form-control" id="blogTitle" name="title" required>
          </div>
          <div class="form-group mb-2 row align-items-center">
          <label for="imageUrl" class="col-sm-3 col-form-label">Image Url</label>
          <div class="col-sm-9 input-group">
            <input type="text" class="form-control" id="imageUrl" name="imageUrl" required>
            <div class="input-group-append">
              <span class="input-group-text h-100 "><i class='bx bx-link'></i></span>
            </div>
          </div>
        </div>
          <div class="form-group mb-2">
            <label for="blogContent">Content</label>
            <textarea id="blogContent" class="form-control" name="content" required></textarea>
          </div>
          <button type="submit" class="btn-add-blog btn btn-success rounded-pill my-3 px-5 py-2">Add Gallery</button>
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
    const galleryData = await Cleaning4SoloAPI.blogAPI();
    const { gallery } = galleryData;
    const blogContainer = document.querySelector(".blog-list");
    const buttonAddBlog = document.querySelector(".btn-add-blog");
    const blogTitle = document.querySelector("#blogTitle");
    const imageUrl = document.querySelector("#imageUrl");

    if (gallery.length === 0) {
      blogContainer.innerHTML = '<p class="text-center" data-aos="fade-up">Belum ada gallery</p>';
    } else {
      gallery.forEach((blog) => {
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
        const updatedGallery = await Cleaning4SoloAPI.blogAPI();
        updatedGallery.gallery.forEach((blog) => {
          blogContainer.innerHTML += createBlogTableDataItemTemplate(blog);
        });
      } catch (error) {
        console.error("Failed to create gallery:", error.message);
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
              text: "Gallery post has been deleted.",
              icon: "success",
            });
            blogContainer.innerHTML = "";
            const updatedGallery = await Cleaning4SoloAPI.blogAPI();
            updatedGallery.gallery.forEach((blog) => {
              blogContainer.innerHTML += createBlogTableDataItemTemplate(blog);
            });
          } catch (error) {
            Swal.fire({
              title: "Failed",
              text: `Failed to delete gallery post: ${error.message}`,
              icon: "error",
            });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: "Cancelled",
            text: "Your gallery post is safe :)",
            icon: "info",
          });
        }
      }
    });
  },
};

export { Gallery };
