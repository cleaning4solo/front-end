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
    userSection.innerHTML = '<button onclick="logout()" class="button btn btn-danger rounded-pill px-4 py-2">Logout</button>';
  }
}

export default updateLoginSection;
