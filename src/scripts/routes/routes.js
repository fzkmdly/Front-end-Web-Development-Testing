import Home from '../view/pages/home';
import Detail from '../view/pages/detail';
import Partner from '../view/pages/partner';
import Login from '../view/pages/login';
import Register from '../view/pages/register';
import Sewa from '../view/pages/rentalList';
import TambahMobil from '../view/pages/tambahMobil';
import Checkout from '../view/pages/checkout';
import About from '../view/pages/about';
import Checking from '../view/pages/checking';
import TaC from '../view/pages/tac';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/partner': Partner,
  '/login': Login,
  '/register': Register,
  '/sewa': Sewa,
  '/tambah-mobil': TambahMobil,
  '/checkout': Checkout,
  '/about': About,
  '/checking/:id': Checking,
  '/tac': TaC,
};

export default routes;
