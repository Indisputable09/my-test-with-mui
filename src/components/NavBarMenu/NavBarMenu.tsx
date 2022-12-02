import React from 'react';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useNavBarMenuStyles } from './NavBarMenu.styles';
import NavBarMenuItem from '../NavBarMenuItem';
import { navBarMenuItems } from './NavBarMenuContent';
import ThemeSwitcher from '../ThemeSwitcher';

const NavBarMenu: React.FC = () => {
  const { classes } = useNavBarMenuStyles();

  return (
    <>
      <List component="nav" className={classes.navBarMenu} disablePadding>
        {navBarMenuItems.map((item, index) => (
          <React.Fragment key={index}>
            <NavBarMenuItem {...item} />
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <ThemeSwitcher />
    </>
  );
};

export default NavBarMenu;
