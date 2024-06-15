import { Dashboard } from '../views/admin-pages/dashboard';
import { Blog } from '../views/admin-pages/admin-blogs';

const adminRoutes = {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/blogs': Blog,
};

export default adminRoutes;
