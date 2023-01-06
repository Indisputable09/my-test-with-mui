import { Typography } from '@mui/material';
import React from 'react';
// import { useLocation } from 'react-router-dom';
import CollapsedBreadcrumbs from '../components/Crumbs/Crumbs';
import { useNavBarStyles } from '../components/NavBar/NavBar.styles';
import TableComponent from '../components/TableComponent';
import { productRows } from '../TableRows/TableRows';
import { productCatalogColumns } from '../TableColumns/TableColumns';

interface IProductsCatalogPageProps {
  darkTheme: boolean;
}

const ProductsCatalogPage: React.FC<IProductsCatalogPageProps> = ({
  darkTheme,
}) => {
  const { classes, cx } = useNavBarStyles();

  return (
    <>
      <CollapsedBreadcrumbs
        darkTheme={darkTheme}
        linksData={{
          link: '/products/productsCatalog',
          pageName: 'Каталог товарів',
        }}
      />
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
  );
};

export default ProductsCatalogPage;
