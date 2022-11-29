// import IconDashboard from '@mui/icons-material/Dashboard';
// import IconShoppingCart from '@mui/icons-material/ShoppingCart';
// import IconPeople from '@mui/icons-material/People';
// import IconBarChart from '@mui/icons-material/BarChart';
import InventoryIcon from '@mui/icons-material/Inventory';
import SourceIcon from '@mui/icons-material/Source';
import SettingsIcon from '@mui/icons-material/Settings';
// import IconLibraryBooks from '@mui/icons-material/LibraryBooks';

export const navBarMenuItems = [
  //   {
  //     name: 'Dashboard',
  //     link: '/',
  //     Icon: IconDashboard,
  //   },
  //   {
  //     name: 'Orders',
  //     link: '/orders',
  //     Icon: IconShoppingCart,
  //   },
  //   {
  //     name: 'Customers',
  //     link: '/customers',
  //     Icon: IconPeople,
  //   },
  //   {
  //     name: 'Reports',
  //     link: '/reports',
  //     Icon: IconBarChart,
  //   },
  {
    name: 'Продукція',
    id: 1,
    Icon: InventoryIcon,
    items: [
      {
        name: 'Аналізи',
      },
      {
        name: 'Категорія аналізів',
      },
      {
        name: 'Скрінінг програми',
      },
      {
        name: 'Акції',
      },
    ],
  },
  {
    name: 'Контент',
    id: 2,
    Icon: SourceIcon,
    items: [
      {
        name: 'Новини',
      },
      {
        name: 'Довідник лікарям',
      },
      {
        name: 'Особливі сторінки',
      },
      {
        name: 'FAQ’s',
      },
      {
        name: 'Відгуки',
      },
    ],
  },
  {
    name: 'Налаштування',
    id: 3,
    Icon: SettingsIcon,
    items: [
      {
        name: 'Мови',
      },
      {
        name: 'Контакти',
      },
      {
        name: 'Шорткоди',
      },
      {
        name: 'Редиректи',
      },
      {
        name: 'robots.txt',
      },
    ],
  },
];
