import { makeStyles } from 'tss-react/mui';
import { drawerWidth } from '../NavBar/NavBar.styles';

export const useNavBarMenuStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    navBarMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  })
);
