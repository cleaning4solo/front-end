import { Dashboard } from '../views/admin-pages/dashboard';
import { Admin } from '../views/admin-pages/admin-page';

const adminRoutes = {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/blogs': Admin,
};

export default adminRoutes;
