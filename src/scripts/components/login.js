import { showSuccessAlert } from './allertMessage';

function logout() {
  showSuccessAlert('berhasil logout');
  localStorage.removeItem('token');
  updateLoginSection();
}

window.logout = logout;

function updateLoginSection() {
  const userSection = document.querySelector('.login-page');
  if (!localStorage.getItem('token')) {
    userSection.innerHTML = '<a href="#/login" class="button btn-green rounded-pill px-4 py-2">Login</a>';
  } else {
    userSection.innerHTML = `<li class="dropdown">
            <a href="#"><img src="img/icon-user.png" alt="" class="img-fluid" style="width: 60px;"><i class="dropdown-indicator"></i></a>
            <ul>
              <li><a href="#/volunteer">Your Event</a></li>
              <li class="d-flex justify-content-center"><button onclick="logout()" class="button btn btn-danger rounded-pill w-75 py-2 my-2">Logout</button></li>
            </ul>
          </li>`;
  }
}

export default updateLoginSection;
