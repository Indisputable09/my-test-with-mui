import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useNavBarStyles } from './NavBar.styles';
import NavBarMenu from '../NavBarMenu';
import TableComponent from '../TableComponent';
import { Box, Typography } from '@mui/material';
import CollapsedBreadcrumbs from '../Crumbs';
import ProductPage from '../ProductPage';
import { ProductType } from '../types/ProductTypes';

interface INavBarProps {
  openDrawer: boolean;
  productId: number | null;
  rows: ProductType[];
  handleThemeClick: () => void;
  darkTheme: boolean;
}

const NavBar: React.FC<INavBarProps> = ({
  openDrawer,
  productId,
  rows,
  handleThemeClick,
  darkTheme,
}) => {
  const chosenProduct = rows.find(row => row.id === productId);
  const { classes, cx } = useNavBarStyles();
  return (
    <div className={cx('App', classes.root)}>
      <CssBaseline />
      <NavBarMenu
        openDrawer={openDrawer}
        handleThemeClick={handleThemeClick}
        darkTheme={darkTheme}
      />
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
