import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useNavBarStyles } from './NavBar.styles';
import NavBarMenu from '../NavBarMenu';
import TableComponent from '../TableComponent';
import { Box, Typography } from '@mui/material';
import CollapsedBreadcrumbs from '../Crumbs';
import ProductPage from '../ProductPage';
import { GridColDef, GridCellParams } from '@mui/x-data-grid';
import {
  ControlledSwitch,
  MoreActions,
  PriceCell,
  productRows,
  productCategoriesRows,
  FAQRows,
  showImgColumn,
  FAQActions,
} from '../TableComponent/TableData';
import { CellExpandComponent } from '../TableComponent/CellExpand';
import FAQPage from '../FAQPage';

interface INavBarProps {
  openDrawer: boolean;
  productId: number | null;
  FAQId: number | null;
  handleThemeClick: () => void;
  darkTheme: boolean;
}

const NavBar: React.FC<INavBarProps> = ({
  openDrawer,
  productId,
  FAQId,
  handleThemeClick,
  darkTheme,
}) => {
  const chosenProduct = productRows.find(row => row.id === productId);
  const chosenQuestion = FAQRows.find(row => row.id === FAQId);
  const { classes, cx } = useNavBarStyles();

  const productCatalogColumns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
    },
    {
      field: 'image',
      headerName: 'Image',
      width: 110,
      editable: false,
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
      headerName: 'Name',
      width: 330,
      editable: false,
      renderCell: (params: GridCellParams) => {
        return <CellExpandComponent params={params} darkTheme={darkTheme} />;
      },
    },
    {
      field: 'sku',
      headerName: 'SKU',
      width: showImgColumn ? 110 : 220,
      editable: false,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 110,
      editable: false,
      renderCell: params => {
        return (
          <PriceCell price={params.row.price} discount={params.row?.discount} />
        );
      },
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 150,
      editable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      editable: false,
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
    },
    {
      field: 'image',
      headerName: 'Image',
      width: 110,
      editable: false,
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
      headerName: 'Name',
      width: 700,
      editable: false,
      renderCell: (params: GridCellParams) => {
        return <CellExpandComponent params={params} darkTheme={darkTheme} />;
      },
    },
    {
      field: 'sort',
      headerName: 'Сортування',
      width: 100,
      editable: false,
    },
    {
      field: 'actions',
      headerName: 'Дії',
      editable: false,
      sortable: false,
      disableColumnMenu: true,
      renderCell: () => <FAQActions />,
      width: 120,
    },
  ];

  const FAQColumns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 910,
      editable: false,
      renderCell: (params: GridCellParams) => {
        return <CellExpandComponent params={params} darkTheme={darkTheme} />;
      },
    },
    {
      field: 'actions',
      headerName: 'Дії',
      editable: false,
      sortable: false,
      disableColumnMenu: true,
      renderCell: () => <FAQActions />,
      width: 120,
    },
  ];

  return (
    <div className={cx('App', classes.root)}>
      <CssBaseline />
      <NavBarMenu
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
          {!productId && !chosenProduct && !FAQId && !chosenQuestion && (
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
            </>
          )}
        </Container>
      </main>
    </div>
  );
};

export default NavBar;
