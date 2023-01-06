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
import FAQData from './components/FAQData';
import ProductData from './components/ProductData';
import ProductCategoryData from './components/ProductCategoryData';
import LanguagesData from './components/LanguagesData';

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
              {/* ----------------------- */}
              <Route
                path="products/productsCatalog/:id/edit"
                element={
                  <ProductData
                    darkTheme={darkTheme}
                    initialLink="/products/productsCatalog"
                  />
                }
              />
              <Route
                path="products/productsCatalog/add"
                element={
                  <ProductData
                    darkTheme={darkTheme}
                    initialLink="/products/productsCatalog"
                  />
                }
              />
              {/* -------------------------- */}
              {/* -------------------------- */}
              <Route
                path="products/productsCategories"
                element={<ProductsCategoriesPage darkTheme={darkTheme} />}
              />
              <Route
                path="products/productsCategories/:id/edit"
                element={
                  <ProductCategoryData
                    darkTheme={darkTheme}
                    initialLink="/products/productsCategories"
                  />
                }
              />
              <Route
                path="products/productsCategories/add"
                element={
                  <ProductCategoryData
                    darkTheme={darkTheme}
                    initialLink="/products/productsCategories"
                  />
                }
              />
              {/* -------------------------- */}
              <Route
                path="products/FAQ"
                element={<FAQPage darkTheme={darkTheme} />}
              />
              <Route
                path="products/FAQ/:id/edit"
                element={
                  <FAQData darkTheme={darkTheme} initialLink="/products/FAQ" />
                }
              />
              <Route
                path="products/FAQ/add"
                element={
                  <FAQData darkTheme={darkTheme} initialLink="/products/FAQ" />
                }
              />
              {/* ------------------------- */}
              <Route
                path="products/languages"
                element={<LanguagesPage darkTheme={darkTheme} />}
              />
              <Route
                path="products/languages/:id/edit"
                element={
                  <LanguagesData
                    darkTheme={darkTheme}
                    initialLink="/products/languages"
                  />
                }
              />
              <Route
                path="products/languages/add"
                element={
                  <LanguagesData
                    darkTheme={darkTheme}
                    initialLink="/products/languages"
                  />
                }
              />
              {/* ------------------------------------------------- */}
              <Route
                path="products/cities"
                element={<CitiesPage darkTheme={darkTheme} />}
              />
              {/* <Route
                path="products/cities/:id/edit"
                element={
                  <CitiesData
                    darkTheme={darkTheme}
                    initialLink="/products/cities"
                  />
                }
              />
              <Route
                path="products/cities/add"
                element={
                  <CitiesData
                    darkTheme={darkTheme}
                    initialLink="/products/cities"
                  />
                }
              /> */}
              {/* --------------------------------------------------- */}
              <Route
                path="products/manufacturers"
                element={<ManufacturersPage darkTheme={darkTheme} />}
              />
              {/* <Route
                path="products/manufacturers/:id/edit"
                element={
                  <ManufacturersData
                    darkTheme={darkTheme}
                    initialLink="/products/manufacturers"
                  />
                }
              />
              <Route
                path="products/manufacturers/add"
                element={
                  <ManufacturersData
                    darkTheme={darkTheme}
                    initialLink="/products/manufacturers"
                  />
                }
              /> */}
              {/* -------------------------------- */}
              <Route path="*" element={<h1>Error when no link is found</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
};
