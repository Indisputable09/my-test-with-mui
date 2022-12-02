import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import { useNavBarStyles } from './NavBar.styles';
import NavBarMenu from '../NavBarMenu';
import TableComponent from '../TableComponent';
import { Box, Typography } from '@mui/material';
import CollapsedBreadcrumbs from '../Crumbs';
import NavBarMenuMini from '../NavBarMenuMini';
import ProductPage from '../ProductPage';
import { ProductType } from '../types/ProductTypes';

interface NavBarProps {
  openDrawer: boolean;
  productId: number | null;
  rows: ProductType[];
}

const NavBar: React.FC<NavBarProps> = ({ openDrawer, productId, rows }) => {
  const chosenProduct = rows.find(row => row.id === productId);
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
      <Drawer
        variant="permanent"
        classes={{
          paper: cx(classes.miniDrawerPaper, openDrawer ? 'hide' : null),
        }}
      >
        <NavBarMenuMini />
      </Drawer>
      <main className={cx(classes.content, openDrawer ? 'active' : null)}>
        <Box
          className={cx(classes.overlay, openDrawer ? 'active' : null)}
        ></Box>
        <Container
          className={cx(classes.container, openDrawer ? 'active' : null)}
        >
          {productId && chosenProduct ? (
            <ProductPage chosenProduct={chosenProduct} />
          ) : (
            <>
              <CollapsedBreadcrumbs />
              <Typography component="h2" sx={{ fontSize: '3rem', mb: '20px' }}>
                Товари
              </Typography>
              <TableComponent />
            </>
          )}
        </Container>
      </main>
    </div>
  );
};

export default NavBar;
