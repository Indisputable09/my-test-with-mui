import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/material';
import { useCrumbsStyles } from './Crumbs.styles';

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
          underline="hover"
          color="inherit"
          href="#"
          className={cx(classes.mainLink, darkTheme ? 'dark' : null)}
        >
          Dashboard
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="#"
          className={cx(classes.mainLink, darkTheme ? 'dark' : null)}
        >
          Catalog
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="#"
          className={cx(classes.mainLink, darkTheme ? 'dark' : null)}
        >
          Accessories
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="#"
          className={cx(classes.mainLink, darkTheme ? 'dark' : null)}
        >
          New Collection
        </Link>
        <Typography
          className={cx(classes.currentLink, darkTheme ? 'dark' : null)}
        >
          {productName ? productName : 'This page'}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default CollapsedBreadcrumbs;
