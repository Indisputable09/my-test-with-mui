import React from 'react';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useNavBarMenuStyles } from './NavBarMenu.styles';
import NavBarMenuItem from '../NavBarMenuItem';
import { navBarMenuItems } from './NavBarMenuContent';

// const navBarMenuItems = [
//   //   {
//   //     name: 'Dashboard',
//   //     link: '/',
//   //     Icon: IconDashboard,
//   //   },
//   //   {
//   //     name: 'Orders',
//   //     link: '/orders',
//   //     Icon: IconShoppingCart,
//   //   },
//   //   {
//   //     name: 'Customers',
//   //     link: '/customers',
//   //     Icon: IconPeople,
//   //   },
//   //   {
//   //     name: 'Reports',
//   //     link: '/reports',
//   //     Icon: IconBarChart,
//   //   },
//   {
//     name: 'Продукція',
//     id: 1,
//     Icon: InventoryIcon,
//     items: [
//       {
//         name: 'Аналізи',
//       },
//       {
//         name: 'Категорія аналізів',
//       },
//       {
//         name: 'Скрінінг програми',
//       },
//       {
//         name: 'Акції',
//       },
//     ],
//   },
//   {
//     name: 'Контент',
//     id: 2,
//     Icon: SourceIcon,
//     items: [
//       {
//         name: 'Новини',
//       },
//       {
//         name: 'Довідник лікарям',
//       },
//       {
//         name: 'Особливі сторінки',
//       },
//       {
//         name: 'FAQ’s',
//       },
//       {
//         name: 'Відгуки',
//       },
//     ],
//   },
//   {
//     name: 'Налаштування',
//     id: 3,
//     Icon: SettingsIcon,
//     items: [
//       {
//         name: 'Мови',
//       },
//       {
//         name: 'Контакти',
//       },
//       {
//         name: 'Шорткоди',
//       },
//       {
//         name: 'Редиректи',
//       },
//       {
//         name: 'robots.txt',
//       },
//     ],
//   },
// ];

const NavBarMenu: React.FC = () => {
  const { classes, cx } = useNavBarMenuStyles();

  return (
    <List component="nav" className={classes.navBarMenu} disablePadding>
      {navBarMenuItems.map((item, index) => (
        <React.Fragment key={index}>
          <NavBarMenuItem {...item} />
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default NavBarMenu;
