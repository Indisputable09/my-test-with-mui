import React from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import { useNavBarMenuStyles } from '../NavBarMenu/NavBarMenu.styles';
import { navBarMenuItems } from '../NavBarMenu/NavBarMenuContent';
import ThemeSwitcher from '../ThemeSwitcher';

const NavBarMenuMini: React.FC = () => {
  const { classes } = useNavBarMenuStyles();
  return (
    <>
      <List component="nav" className={classes.navBarMenu} disablePadding>
        {navBarMenuItems.map(({ Icon }, index) => (
          <ListItem button key={index} sx={{ mb: 2 }}>
            {!!Icon && (
              <ListItemIcon className={classes.menuItemIcon}>
                <Icon />
              </ListItemIcon>
            )}
          </ListItem>
        ))}
      </List>
      <ThemeSwitcher smallNavbar={true} />
    </>
  );
};

export default NavBarMenuMini;
