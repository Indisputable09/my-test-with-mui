import InventoryIcon from '@mui/icons-material/Inventory';
import SourceIcon from '@mui/icons-material/Source';
import SettingsIcon from '@mui/icons-material/Settings';

export const navBarMenuItems = [
  {
    name: 'Продукція',
    primaryLinkName: 'products',
    id: 1,
    Icon: InventoryIcon,
    items: [
      {
        name: 'Каталог товарів',
        link: '/products/productsCatalog',
      },
      {
        name: 'Категорії товарів',
        link: '/products/productsCategories',
      },
      {
        name: "FAQ's",
        link: '/products/FAQ',
      },
      {
        name: 'Мови',
        link: '/products/languages',
      },
      {
        name: 'Міста',
        link: '/products/cities',
      },
      {
        name: 'Виробники',
        link: '/products/manufacturers',
      },
    ],
  },
  {
    name: 'Контент',
    primaryLinkName: 'content',
    id: 2,
    Icon: SourceIcon,
    items: [
      {
        name: 'Новини',
        link: '/content/someLink1',
      },
      {
        name: 'Довідник лікарям',
        link: '/content/someLink2',
      },
      {
        name: 'Особливі сторінки',
        link: '/content/someLink3',
      },
      {
        name: 'FAQ’s',
        link: '/content/someLink4',
      },
      {
        name: 'Відгуки',
        link: '/content/someLink5',
      },
    ],
  },
  {
    name: 'Налаштування',
    primaryLinkName: 'settings',
    id: 3,
    Icon: SettingsIcon,
    items: [
      {
        name: 'Мови',
        link: '/settings/someLink6',
      },
      {
        name: 'Контакти',
        link: '/settings/someLink7',
      },
      {
        name: 'Шорткоди',
        link: '/settings/someLink8',
      },
      {
        name: 'Редиректи',
        link: '/settings/someLink9',
      },
      {
        name: 'robots.txt',
        link: '/settings/someLink10',
      },
    ],
  },
];
