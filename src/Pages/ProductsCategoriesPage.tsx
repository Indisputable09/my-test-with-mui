import React from 'react';
import { Typography } from '@mui/material';
import CollapsedBreadcrumbs from '../components/Crumbs/Crumbs';
import { useNavBarStyles } from '../components/NavBar/NavBar.styles';
import Table from '../components/Table';
import { productCategoriesRows } from '../TableRows/TableRows';
import { productCategoriesColumns } from '../TableColumns/TableColumns';

interface IProductsCategoriesPageProps {
  darkTheme: boolean;
}

const ProductsCategoriesPage: React.FC<IProductsCategoriesPageProps> = ({
  darkTheme,
}) => {
  const { classes, cx } = useNavBarStyles();
  return (
    <>
      <CollapsedBreadcrumbs
        darkTheme={darkTheme}
        linksData={{
          link: '/products/productsCategories',
          pageName: 'Категорії товарів',
        }}
      />
      <Typography
        component="h2"
        className={cx(classes.title, darkTheme ? 'dark' : null)}
      >
        Категорії товарів
      </Typography>
      <Table
        darkTheme={darkTheme}
        columns={productCategoriesColumns}
        rows={productCategoriesRows}
      />
    </>
  );
};

export default ProductsCategoriesPage;
