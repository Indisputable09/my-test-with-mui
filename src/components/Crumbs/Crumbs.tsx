import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/material';
import { useCrumbsStyles } from './Crumbs.styles';
import { useLocation } from 'react-router-dom';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

interface ICrumbsProps {
  productName?: string | null;
  darkTheme: boolean;
}

const CollapsedBreadcrumbs: React.FC<ICrumbsProps> = ({
  productName = null,
  darkTheme,
}) => {
  const { classes, cx } = useCrumbsStyles();
  const location = useLocation();
  const activePath = location.pathname.split('/');
  const path = activePath[activePath.length - 1];

  return (
    <Box
      role="presentation"
      onClick={handleClick}
      sx={{ mb: 3, color: '#fff' }}
    >
      <Breadcrumbs
        maxItems={2}
        aria-label="breadcrumb"
        separator={
          <ArrowForwardIcon
            fontSize="small"
            className={cx(classes.separator, darkTheme ? 'dark' : null)}
          />
        }
      >
        <Link
          to="/"
          className={cx(classes.mainLink, darkTheme ? 'dark' : null)}
        >
          Дашборд
        </Link>
        {path && (
          <Link
            to={'/products/' + path}
            className={cx(classes.mainLink, darkTheme ? 'dark' : null)}
          >
            {path === 'productsCatalog' && 'Каталог товарів'}
            {path === 'productsCategories' && 'Категорії товарів'}
            {path === 'FAQ' && 'FAQ`s'}
            {path === 'languages' && 'Мови'}
            {path === 'cities' && 'Міста'}
            {path === 'manufacturers' && 'Виробники'}
          </Link>
        )}
        {/* <Link
          underline="hover"
          color="inherit"
          href="#"
          className={cx(classes.mainLink, darkTheme ? 'dark' : null)}
        >
          Accessories
        </Link> */}
        {/* <Link
          underline="hover"
          color="inherit"
          href="#"
          className={cx(classes.mainLink, darkTheme ? 'dark' : null)}
        >
          New Collection
        </Link> */}
        {/* <Typography
          className={cx(classes.currentLink, darkTheme ? 'dark' : null)}
        >
          {productName ? productName : 'This page'}
        </Typography> */}
      </Breadcrumbs>
    </Box>
  );
};

export default CollapsedBreadcrumbs;
