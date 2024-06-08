import Homepage from '../views/pages/homepage';
import About from '../views/pages/about-page';
import Calculator from '../views/pages/calculator-page';
import Blog from '../views/pages/blogs-page';
import DetailBlog from '../views/pages/detail-blog';
import EventDetail from '../views/pages/detail-event-page';
import Event from '../views/pages/event-page';

const routes = {
  '/': Homepage,
  '/homepage': Homepage,
  '/about': About,
  '/calculator': Calculator,
  '/blogs': Blog,
  '/detail/:id': DetailBlog,
  '/event': Event,
  '/event/:id': EventDetail,
};

export default routes;
