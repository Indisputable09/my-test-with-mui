import React, { Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useNavBarStyles } from './NavBar.styles';
import NavBarMenu from '../NavBarMenu';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

interface INavBarProps {
  toggleDrawer: (open: boolean) => void;
  openDrawer: boolean;
  productId: number | null;
  FAQId: number | null;
  languageId: number | null;
  productCategoryId: number | null;
  handleThemeClick: () => void;
  darkTheme: boolean;
}

const NavBar: React.FC<INavBarProps> = ({
  toggleDrawer,
  openDrawer,
  productId,
  FAQId,
  languageId,
  handleThemeClick,
  darkTheme,
  productCategoryId,
}) => {
  const { classes, cx } = useNavBarStyles();

  return (
    <div className={cx('App', classes.root)}>
      <CssBaseline />
      <NavBarMenu
        toggleDrawer={toggleDrawer}
        openDrawer={openDrawer}
        handleThemeClick={handleThemeClick}
        darkTheme={darkTheme}
      />
      <main
        className={cx(
          classes.content,
          openDrawer ? 'active' : null,
          darkTheme ? 'dark' : null
        )}
      >
        <Container
          className={cx(classes.container, openDrawer ? 'active' : null)}
        >
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
        <Box
          className={cx(classes.overlay, openDrawer ? 'active' : null)}
          onClick={() => toggleDrawer(!openDrawer)}
        ></Box>
      </main>
    </div>
  );
};

export default NavBar;
