const createDashboardTemplate = () => `
<div class="head-title">
    <div class="left">
        <h1>Dashboard</h1>
        <ul class="breadcrumb">
            <li>
                <a href="#">Dashboard</a>
            </li>
            <li><i class='bx bx-chevron-right' ></i></li>
            <li>
                <a class="active" href="#">Home</a>
            </li>
        </ul>
    </div>
</div>

<ul class="box-info">
    <li>
        <i class='bx bxs-group' ></i>
        <span class="text">
            <h3>3</h3>
            <p>Admin</p>
        </span>
    </li>
    <li>
        <i class='bx bx-calendar event-icon' ></i>
        <span class="text">
            <h3>20</h3>
            <p>Events</p>
        </span>
    </li>
    <li>
        <i class='bx bx-images' ></i>
        <span class="text">
            <h3>45</h3>
            <p>Event</p>
        </span>
    </li>
</ul>


<div class="table-data">
    <div class="order">
        <div class="head">
            <h3>Perubahan yang dilakukan</h3>
            <i class='bx bx-search' ></i>
            <i class='bx bx-filter' ></i>
        </div>
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Date Order</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="img/profile.svg">
                        <p>Prabroro</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span class="status completed">Insert</span></td>
                </tr>
                <tr>
                    <td>
                        <img src="img/profile.svg">
                        <p>Prabroro</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span class="status pending">Delete</span></td>
                </tr>
                <tr>
                    <td>
                        <img src="img/profile.svg">
                        <p>Prabroro</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span class="status process">Update</span></td>
                </tr>
                <tr>
                    <td>
                        <img src="img/profile.svg">
                        <p>Prabroro</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span class="status pending">Delete</span></td>
                </tr>
                <tr>
                    <td>
                        <img src="img/profile.svg">
                        <p>Prabroro</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span class="status completed">Insert</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="todo">
        <div class="head">
            <h3>Kosong</h3>
            <i class='bx bx-plus' ></i>
            <i class='bx bx-filter' ></i>
        </div>
        <ul class="todo-list">
            <li class="completed">
                <p>Kosong</p>
                <i class='bx bx-dots-vertical-rounded' ></i>
            </li>
            <li class="completed">
                <p>Kosong</p>
                <i class='bx bx-dots-vertical-rounded' ></i>
            </li>
            <li class="not-completed">
                <p>Kosong</p>
                <i class='bx bx-dots-vertical-rounded' ></i>
            </li>
            <li class="completed">
                <p>Kosong</p>
                <i class='bx bx-dots-vertical-rounded' ></i>
            </li>
            <li class="not-completed">
                <p>Kosong</p>
                <i class='bx bx-dots-vertical-rounded' ></i>
            </li>
        </ul>
    </div>
</div>
  `;

export { createDashboardTemplate };
