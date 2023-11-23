import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Partner from '../views/pages/partner';
import Login from '../views/pages/login';
import Register from '../views/pages/register';

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/partner': Partner,
  '/login': Login,
  '/register': Register,
};

export default routes;
