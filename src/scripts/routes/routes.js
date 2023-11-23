import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Partner from '../views/pages/partner';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import Sewa from '../views/pages/sewa';
import TambahMobil from '../views/pages/tambah-mobil';
import Checkout from '../views/pages/checkout';

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/partner': Partner,
  '/login': Login,
  '/register': Register,
  '/sewa': Sewa,
  '/tambah-mobil': TambahMobil,
  '/checkout': Checkout,
};

export default routes;
