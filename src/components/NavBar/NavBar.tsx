import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useNavBarStyles } from './NavBar.styles';
import NavBarMenu from '../NavBarMenu';
import TableComponent from '../TableComponent';

interface NavBarProps {
  openDrawer: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ openDrawer }) => {
  const { classes, cx } = useNavBarStyles();
  return (
    <div className={cx('App', classes.root)}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: cx(classes.drawerPaper, openDrawer ? 'active' : null),
        }}
      >
        <NavBarMenu />
      </Drawer>
      <main className={classes.content}>
        <Container
          maxWidth="lg"
          className={cx(classes.container, openDrawer ? 'active' : null)}
        >
          <TableComponent />
        </Container>
      </main>
    </div>
  );
};

export default NavBar;
