import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FAQPage from './Pages/FAQPage';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ProductsCatalogPage from './Pages/ProductsCatalogPage';
import ProductsCategoriesPage from './Pages/ProductsCategoriesPage';
import LanguagesPage from './Pages/LanguagesPage';
import CitiesPage from './Pages/CitiesPage';
import ManufacturersPage from './Pages/ManufacturersPage';
import { GlobalContext } from './hooks/GlobalContext';

export const App: React.FC = () => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(true);
  const [darkTheme, setDarkTheme] = React.useState<boolean>(
    localStorage.getItem('THEME_MODE') === 'dark' ? true : false ?? false
  );

  const [mockProductId] = React.useState<null | number>(null);
  const [mockFAQId] = React.useState<null | number>(null);
  const [mockLanguageId] = React.useState<null | number>(null);
  const [mockProductCategoryId] = React.useState<null | number>(null);

  const handleThemeClick = () => {
    setDarkTheme(!darkTheme);
  };

  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };

  return (
    <>
      <GlobalContext.Provider value={{ darkTheme }}>
        <Header
          toggleDrawer={toggleDrawer}
          openDrawer={openDrawer}
          darkTheme={darkTheme}
        />

        {/* <Button
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
      </Button> */}
        <BrowserRouter basename="/my-test-with-mui/">
          <Routes>
            <Route
              path="/"
              element={
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
              }
            >
              <Route
                index
                element={<ProductsCatalogPage darkTheme={darkTheme} />}
              />
              <Route
                path="products/productsCatalog"
                element={<ProductsCatalogPage darkTheme={darkTheme} />}
              />
              <Route
                path="products/productsCategories"
                element={<ProductsCategoriesPage darkTheme={darkTheme} />}
              />
              <Route
                path="products/FAQ"
                element={<FAQPage darkTheme={darkTheme} />}
              />
              <Route
                path="products/languages"
                element={<LanguagesPage darkTheme={darkTheme} />}
              />
              <Route
                path="products/cities"
                element={<CitiesPage darkTheme={darkTheme} />}
              />
              <Route
                path="products/manufacturers"
                element={<ManufacturersPage darkTheme={darkTheme} />}
              />
              <Route path="*" element={<h1>Error when no link is found</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
};
