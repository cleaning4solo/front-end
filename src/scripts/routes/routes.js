import Homepage from '../views/pages/homepage';
import About from '../views/pages/about-page';
import Calculator from '../views/pages/calculator-page';
import Blog from '../views/pages/blogs-page';
import DetailBlog from '../views/pages/detail-blog';
import EventDetail from '../views/pages/detail-event-page';
import Event from '../views/pages/event-page';
import Login from '../views/pages/login-page';
import VolunteerInfoPage from '../views/pages/volunteerInfoPage';
import Admin from '../views/admin-pages/admin';
import { getUserRoleFromToken } from '../components/decodeUserID';
import { showErrorAlert } from '../components/allertMessage';

const routes = {
  '/': Homepage,
  '/login': Login,
  '/homepage': Homepage,
  '/about': About,
  '/calculator': Calculator,
  '/blogs': Blog,
  '/detail/:id': DetailBlog,
  '/event': Event,
  '/event/:id': EventDetail,
  '/volunteer': VolunteerInfoPage,
  '/admin': () => {
    const role = getUserRoleFromToken();
    if (role === 'master') {
      return Admin;
    }
    showErrorAlert('Anda tidak terdaftar sebagai Admin');
    window.location.hash = '#/homepage';
    return null;
  },
};

export default routes;
