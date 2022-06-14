import Home from '../navigation/Home';
import Cart from '../navigation/Cart';
import Search from '../navigation/Search';

const routes = [
  {
    name: 'Home',
    component: Home,
    showHeader: false,
  },
  {
    name: 'Search',
    component: Search,
    showHeader: false,
  },
  {
    name: 'Cart',
    component: Cart,
    showHeader: false,
  },
];

export default routes;
