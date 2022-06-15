import Home from '../navigation/Home';
import Cart from '../navigation/Cart';
import Category from '../navigation/Category';
import Search from '../navigation/Search';
import {
  faHome,
  faSearch,
  faSquareCaretUp,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

const routes = [
  {
    name: 'Home',
    component: Home,
    showHeader: false,
    icon: faHome,
  },
  {
    name: 'Search',
    component: Search,
    showHeader: false,
    icon: faSearch,
  },
  {
    name: 'Category',
    component: Category,
    showHeader: false,
    icon: faSquareCaretUp,
  },
  {
    name: 'Cart',
    component: Cart,
    showHeader: false,
    tabBarBadge: true,
    icon: faCartShopping,
  },
];

export default routes;
