import { Button } from '@mui/material';
import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { rows } from './components/TableComponent/TableData';
import { THEME_MODE } from './constants/themeMode';

export const App: React.FC = () => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const [darkTheme, setDarkTheme] = React.useState<boolean>(
    THEME_MODE === 'dark' ? true : false ?? false
  );

  const [mockProductId, setMockProductId] = React.useState<null | number>(null);

  const handleThemeClick = () => {
    setDarkTheme(!darkTheme);
  };

  // const mockProductId = null;

  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };
  return (
    <>
      <Header toggleDrawer={toggleDrawer} openDrawer={openDrawer} />

      <Button
        onClick={() => setMockProductId(2)}
        sx={{ position: 'absolute', right: 0 }}
      >
        Це типу лінк на продукт
      </Button>
      <NavBar
        openDrawer={openDrawer}
        productId={mockProductId}
        rows={rows}
        handleThemeClick={handleThemeClick}
        darkTheme={darkTheme}
      />
    </>
  );
};
