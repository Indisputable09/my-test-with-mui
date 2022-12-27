import { Button } from '@mui/material';
import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { THEME_MODE } from './constants/themeMode';

export const App: React.FC = () => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const [darkTheme, setDarkTheme] = React.useState<boolean>(
    THEME_MODE === 'dark' ? true : false ?? false
  );

  const [mockProductId, setMockProductId] = React.useState<null | number>(null);
  const [mockFAQId, setMockFAQId] = React.useState<null | number>(null);
  const [mockLanguageId, setMockLanguageId] = React.useState<null | number>(
    null
  );
  const [mockProductCategoryId, setMockProductCategoryId] = React.useState<
    null | number
  >(null);

  const handleThemeClick = () => {
    setDarkTheme(!darkTheme);
  };

  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };

  return (
    <>
      <Header
        toggleDrawer={toggleDrawer}
        openDrawer={openDrawer}
        darkTheme={darkTheme}
      />

      <Button
        onClick={() => setMockProductId(2)}
        sx={{ position: 'absolute', right: 0 }}
      >
        До продукту
      </Button>
      <Button
        onClick={() => setMockFAQId(3)}
        sx={{ position: 'absolute', right: 0, top: '90px' }}
      >
        До питання
      </Button>
      <Button
        onClick={() => setMockLanguageId(1)}
        sx={{ position: 'absolute', right: 0, top: '120px' }}
      >
        До мови
      </Button>
      <Button
        onClick={() => setMockProductCategoryId(2)}
        sx={{ position: 'absolute', right: 0, top: '150px' }}
      >
        До категорії продукту
      </Button>
      <NavBar
        toggleDrawer={toggleDrawer}
        openDrawer={openDrawer}
        productId={mockProductId}
        FAQId={mockFAQId}
        languageId={mockLanguageId}
        productCategoryId={mockProductCategoryId}
        handleThemeClick={handleThemeClick}
        darkTheme={darkTheme}
      />
    </>
  );
};
