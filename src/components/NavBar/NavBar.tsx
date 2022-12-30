import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useNavBarStyles } from './NavBar.styles';
import NavBarMenu from '../NavBarMenu';
import TableComponent from '../TableComponent';
import { Box, Typography } from '@mui/material';
import CollapsedBreadcrumbs from '../Crumbs';
import ProductPage from '../ProductPage';
import {
  GridColDef,
  // GridCellParams
} from '@mui/x-data-grid';
import {
  ControlledSwitch,
  MoreActions,
  PriceCell,
  productRows,
  productCategoriesRows,
  FAQRows,
  languagesRows,
  manufacturersRows,
  showImgColumn,
  FAQActions,
  citiesRows,
} from '../TableComponent/TableData';
// import { CellExpandComponent } from '../TableComponent/CellExpand';
import FAQPage from '../FAQPage';
import LanguagesPage from '../LanguagesPage';
import ProductCategoryPage from '../ProductCategoryPage';

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

const darkMode = !!localStorage.getItem('THEME_MODE');

const citiesColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'name',
    headerName: 'Назва',
    width: 910,
    flex: 1,
    editable: false,
  },
  {
    field: 'actions',
    headerName: 'Дії',
    editable: false,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    disableColumnMenu: true,
    renderCell: () => <FAQActions darkTheme={darkMode} />,
    width: 120,
  },
];

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
  const chosenProduct = productRows.find(row => row.id === productId);
  const chosenProductCategory = productCategoriesRows.find(
    row => row.id === productCategoryId
  );
  const chosenQuestion = FAQRows.find(row => row.id === FAQId);
  const chosenLanguage = languagesRows.find(row => row.id === languageId);
  const { classes, cx } = useNavBarStyles();

  const productCatalogColumns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'image',
      headerName: 'Зображення',
      width: 110,
      editable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: params => {
        return (
          <div>
            <img src={params.row.image} alt={params.row.name} width="60" />
          </div>
        );
      },
    },
    {
      field: 'name',
      headerName: 'Назва',
      minWidth: 330,
      // width: 330,
      flex: 1,
      editable: false,
      // renderCell: (params: GridCellParams) => {
      //   return <CellExpandComponent params={params} darkTheme={darkTheme} />;
      // },
    },
    {
      field: 'sku',
      headerName: 'Артикул',
      width: showImgColumn ? 110 : 220,
      editable: false,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'price',
      headerName: 'Ціна',
      width: 110,
      editable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: params => {
        return (
          <PriceCell
            price={params.row.price}
            discount={params.row?.discount}
            darkTheme={darkTheme}
          />
        );
      },
    },
    {
      field: 'quantity',
      headerName: 'Кількість',
      width: 110,
      editable: false,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'category',
      headerName: 'Категорія',
      width: 130,
      editable: false,
      headerAlign: 'center',
      align: 'center',
      // renderCell: (params: GridCellParams) => {
      //   return <CellExpandComponent params={params} darkTheme={darkTheme} />;
      // },
    },
    {
      field: 'status',
      headerName: 'Опубліковано',
      width: 100,
      editable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: params => {
        return (
          <ControlledSwitch status={params.row.status} darkTheme={darkTheme} />
        );
      },
    },
    {
      field: 'actions',
      headerName: 'Дії',
      editable: false,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      disableColumnMenu: true,
      renderCell: () => <MoreActions darkTheme={darkTheme} />,
      width: 120,
    },
  ];

  const productCategoriesColumns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'image',
      headerName: 'Зображення',
      width: 110,
      editable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: params => {
        return (
          <div>
            <img src={params.row.image} alt={params.row.name} width="60" />
          </div>
        );
      },
    },
    {
      field: 'name',
      headerName: 'Назва',
      width: 700,
      flex: 1,
      editable: false,
      // renderCell: (params: GridCellParams) => {
      //   return <CellExpandComponent params={params} darkTheme={darkTheme} />;
      // },
    },
    {
      field: 'sort',
      headerName: 'Сортування',
      width: 100,
      editable: false,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'actions',
      headerName: 'Дії',
      editable: false,
      sortable: false,
      disableColumnMenu: true,
      renderCell: () => <FAQActions darkTheme={darkTheme} />,
      width: 120,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  const languagesColumns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'name',
      headerName: 'Назва',
      width: 910,
      flex: 1,
      editable: false,
      // renderCell: (params: GridCellParams) => {
      //   return <CellExpandComponent params={params} darkTheme={darkTheme} />;
      // },
    },
    {
      field: 'actions',
      headerName: 'Дії',
      editable: false,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      disableColumnMenu: true,
      renderCell: () => <FAQActions darkTheme={darkTheme} />,
      width: 120,
    },
  ];

  const FAQColumns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'name',
      headerName: 'Назва',
      width: 910,
      flex: 1,
      editable: false,
      // renderCell: (params: GridCellParams) => {
      //   return <CellExpandComponent params={params} darkTheme={darkTheme} />;
      // },
    },
    {
      field: 'actions',
      headerName: 'Дії',
      editable: false,
      sortable: false,
      disableColumnMenu: true,
      renderCell: () => <FAQActions darkTheme={darkTheme} />,
      width: 120,
      headerAlign: 'center',
      align: 'center',
    },
  ];

  const manufacturersColumns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'image',
      headerName: 'Зображення',
      width: 110,
      editable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: params => {
        return (
          <div>
            <img src={params.row.image} alt={params.row.name} width="60" />
          </div>
        );
      },
    },
    {
      field: 'name',
      headerName: 'Назва',
      width: 910,
      flex: 1,
      editable: false,
      // renderCell: (params: GridCellParams) => {
      //   return <CellExpandComponent params={params} darkTheme={darkTheme} />;
      // },
    },
    {
      field: 'actions',
      headerName: 'Дії',
      editable: false,
      sortable: false,
      headerAlign: 'center',
      align: 'center',
      disableColumnMenu: true,
      renderCell: () => <FAQActions darkTheme={darkTheme} />,
      width: 120,
    },
  ];

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
        <Box
          className={cx(classes.overlay, openDrawer ? 'active' : null)}
          onClick={() => toggleDrawer(!openDrawer)}
        ></Box>
        <Container
          className={cx(classes.container, openDrawer ? 'active' : null)}
        >
          {productId && chosenProduct && (
            <ProductPage chosenProduct={chosenProduct} darkTheme={darkTheme} />
          )}
          {FAQId && chosenQuestion && (
            <FAQPage darkTheme={darkTheme} chosenQuestion={chosenQuestion} />
          )}
          {languageId && chosenLanguage && (
            <LanguagesPage
              darkTheme={darkTheme}
              chosenLanguage={chosenLanguage}
            />
          )}
          {productCategoryId && chosenProductCategory && (
            <ProductCategoryPage
              darkTheme={darkTheme}
              chosenProductCategory={chosenProductCategory}
            />
          )}
          {!productId &&
            !chosenProduct &&
            !FAQId &&
            !chosenQuestion &&
            !languageId &&
            !chosenLanguage &&
            !chosenProductCategory && (
              <>
                <CollapsedBreadcrumbs darkTheme={darkTheme} />

                <>
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
              </>
            )}
        </Container>
      </main>
    </div>
  );
};

export default NavBar;
