import { Typography } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CollapsedBreadcrumbs from './components/Crumbs/Crumbs';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { useNavBarStyles } from './components/NavBar/NavBar.styles';
import TableComponent from './components/TableComponent';
import {
  citiesRows,
  FAQRows,
  languagesRows,
  manufacturersRows,
  productCategoriesRows,
  productRows,
} from './components/TableComponent/TableData';
import { THEME_MODE } from './constants/themeMode';
import {
  citiesColumns,
  FAQColumns,
  languagesColumns,
  manufacturersColumns,
  productCatalogColumns,
  productCategoriesColumns,
} from './TableColumns/TableColumns';

export const App: React.FC = () => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(true);
  const [darkTheme, setDarkTheme] = React.useState<boolean>(
    THEME_MODE === 'dark' ? true : false ?? false
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

  const { classes, cx } = useNavBarStyles();

  return (
    <>
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
      <BrowserRouter>
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
              element={
                <>
                  <CollapsedBreadcrumbs darkTheme={darkTheme} />
                  <Typography
                    component="h2"
                    className={cx(classes.title, darkTheme ? 'dark' : null)}
                  >
                    Каталог товарів
                  </Typography>
                  <TableComponent
                    darkTheme={darkTheme}
                    columns={productCatalogColumns}
                    rows={productRows}
                  />
                </>
              }
            />
            <Route
              path="products/productsCatalog"
              element={
                <>
                  <CollapsedBreadcrumbs darkTheme={darkTheme} />
                  <Typography
                    component="h2"
                    className={cx(classes.title, darkTheme ? 'dark' : null)}
                  >
                    Каталог товарів
                  </Typography>
                  <TableComponent
                    darkTheme={darkTheme}
                    columns={productCatalogColumns}
                    rows={productRows}
                  />
                </>
              }
            />
            <Route
              path="products/productsCategories"
              element={
                <>
                  <Typography
                    component="h2"
                    className={cx(classes.title, darkTheme ? 'dark' : null)}
                  >
                    Категорії товарів
                  </Typography>
                  <TableComponent
                    darkTheme={darkTheme}
                    columns={productCategoriesColumns}
                    rows={productCategoriesRows}
                  />
                </>
              }
            />
            <Route
              path="products/FAQ"
              element={
                <>
                  <Typography
                    component="h2"
                    className={cx(classes.title, darkTheme ? 'dark' : null)}
                  >
                    FAQ`s
                  </Typography>
                  <TableComponent
                    darkTheme={darkTheme}
                    columns={FAQColumns}
                    rows={FAQRows}
                    page={'FAQ'}
                  />
                </>
              }
            />
            <Route
              path="products/languages"
              element={
                <>
                  <Typography
                    component="h2"
                    className={cx(classes.title, darkTheme ? 'dark' : null)}
                  >
                    Мови
                  </Typography>
                  <TableComponent
                    darkTheme={darkTheme}
                    columns={languagesColumns}
                    rows={languagesRows}
                    page={'languages'}
                  />
                </>
              }
            />
            <Route
              path="products/cities"
              element={
                <>
                  <Typography
                    component="h2"
                    className={cx(classes.title, darkTheme ? 'dark' : null)}
                  >
                    Міста
                  </Typography>
                  <TableComponent
                    darkTheme={darkTheme}
                    columns={citiesColumns}
                    rows={citiesRows}
                    page={'cities'}
                  />
                </>
              }
            />
            <Route
              path="products/manufacturers"
              element={
                <>
                  <Typography
                    component="h2"
                    className={cx(classes.title, darkTheme ? 'dark' : null)}
                  >
                    Виробники
                  </Typography>
                  <TableComponent
                    darkTheme={darkTheme}
                    columns={manufacturersColumns}
                    rows={manufacturersRows}
                    page={'manufactures'}
                  />
                </>
              }
            />
            <Route path="*" element={<h1>Error when no link is found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
