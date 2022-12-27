import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useNavBarMenuStyles } from './NavBarMenu.styles';
import NavBarMenuItem from '../NavBarMenuItem';
import { navBarMenuItems } from './NavBarMenuContent';
import {
  Drawer,
  FormControlLabel,
  ListItem,
  ListItemIcon,
} from '@mui/material';
import { useNavBarStyles } from '../NavBar/NavBar.styles';
import { ThemeSwitcherStyled } from './NavBarMenu.styles';

interface INavBarMenuProps {
  toggleDrawer: (open: boolean) => void;
  openDrawer: boolean;
  handleThemeClick: () => void;
  darkTheme: boolean;
}

const NavBarMenu: React.FC<INavBarMenuProps> = ({
  toggleDrawer,
  openDrawer,
  handleThemeClick,
  darkTheme,
}) => {
  const { classes } = useNavBarMenuStyles();
  const { classes: nbClasses, cx } = useNavBarStyles();
  const [dark, setDark] = React.useState<boolean>(darkTheme ?? false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDark(event.target.checked);
    handleThemeClick();
  };
  localStorage.setItem('THEME_MODE', dark ? 'dark' : 'light');

  return (
    <>
      <Drawer
        variant="permanent"
        classes={{
          paper: cx(
            nbClasses.drawerPaper,
            openDrawer ? 'active' : null,
            darkTheme ? 'dark' : null
          ),
        }}
      >
        <List
          component="nav"
          className={cx(classes.navBarMenu, darkTheme ? 'dark' : null)}
          disablePadding
        >
          {navBarMenuItems.map((item, index) => (
            <React.Fragment key={index}>
              <NavBarMenuItem {...item} darkTheme={darkTheme} />
              <Divider />
            </React.Fragment>
          ))}
        </List>
        <FormControlLabel
          sx={{ mt: 'auto', mr: 'auto', ml: 'auto' }}
          control={
            <ThemeSwitcherStyled
              sx={{ m: 1 }}
              checked={dark}
              onChange={handleChange}
            />
          }
          label=""
        />
      </Drawer>
      <Drawer
        onClick={e => {
          if ((e.target as HTMLElement).nodeName === 'INPUT') {
            return;
          }
          toggleDrawer(!openDrawer);
        }}
        variant="permanent"
        classes={{
          paper: cx(
            nbClasses.miniDrawerPaper,
            openDrawer ? 'hide' : null,
            darkTheme ? 'dark' : null
          ),
        }}
      >
        <List component="nav" className={classes.navBarMenu} disablePadding>
          {navBarMenuItems.map(({ Icon }, index) => (
            <ListItem button key={index} sx={{ mb: 2 }}>
              {!!Icon && (
                <ListItemIcon
                  className={cx(
                    classes.menuItemIcon,
                    darkTheme ? 'dark' : null
                  )}
                >
                  <Icon />
                </ListItemIcon>
              )}
            </ListItem>
          ))}
        </List>
        <FormControlLabel
          sx={{ mt: 'auto', mr: 'auto', ml: '-11px' }}
          control={
            <ThemeSwitcherStyled
              sx={{ m: 1 }}
              checked={dark}
              onChange={handleChange}
            />
          }
          label=""
        />
      </Drawer>
    </>
  );
};

export default NavBarMenu;
