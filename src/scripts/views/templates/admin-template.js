import { formatDate, formatShortDate } from '../../components/date-formater';

const createHeaderDashboardTemplate = () => `
<div class="left">
    <h1>Dashboard</h1>
    <ul class="breadcrumb">
        <li>
            <a href="#">Home</a>
        </li>
        <li><i class='bx bx-chevron-right' ></i></li>
        <li>
            <a class="active" href="#">Dashboard</a>
        </li>
    </ul>
</div>
`;

const createBoxInfoItemTemplate = (countUser, countEvent, countBlog) => `
<li>
<i class='bx bxs-group' ></i>
<span class="text">
    <h3>${countUser}</h3>
    <p>Pengguna</p>
</span>
</li>
<li>
<i class='bx bx-calendar event-icon' ></i>
<span class="text">
    <h3>${countEvent}</h3>
    <p>Events</p>
</span>
</li>
<li>
<i class='bx bx-images' ></i>
<span class="text">
    <h3>${countBlog}</h3>
    <p>Postingan</p>
</span>
</li>
`;

const createTableDataItemTemplate = (users) => `
<tr>
    <td>
        <img src="img/profile.svg">
        <p class="my-auto">${users.username}</p>
    </td>
    <td>${formatShortDate(users.createdAt)}</td>
    <td><button class="btnDeleteUser button btn btn-danger rounded-pill" dataId="${users._id}">Delete</button></td>
</tr>
`;

const createNewEventListTemplate = (events) => `
<li class="completed">
    <div>
        <p class="fw-bold">${events.name}</p>
        <p><i class='bx bxs-map'></i> ${events.location}</p>
    </div>
    <p class="d-flex gap-2 align-items-center mt-0"><i class='bx bxs-calendar' ></i>${formatShortDate(events.date)}</p>
</li>
`;

const createBlogTableDataItemTemplate = (blog) => `
  <tr>
    <td>${blog.title}</td>
    <td>${formatDate(blog.createdAt)}</td>
    <td>
      <button class="btn btn-danger rounded-pill btnDeleteBlog" dataId="${blog._id}">Delete</button>
    </td>
  </tr>
`;

export {
  createBlogTableDataItemTemplate,
  createHeaderDashboardTemplate,
  createBoxInfoItemTemplate,
  createTableDataItemTemplate,
  createNewEventListTemplate,
};
