import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Divider, List, ListItem, Typography } from '@mui/material';
import CollapsedBreadcrumbs from '../Crumbs';
import { ProductType } from '../types/ProductTypes';
import { useProductPageStyles } from './ProductPage.styles';
import {
  Attributes,
  Basic,
  Connections,
  Discounts,
  Images,
  Options,
} from './SubLinks';

interface IProductPageProps {
  chosenProduct: ProductType;
}

const links = [
  { name: 'basic', id: 1 },
  { name: 'connections', id: 2 },
  { name: 'images', id: 3 },
  { name: 'attributes', id: 4 },
  { name: 'options', id: 5 },
  { name: 'discounts', id: 6 },
];

const ProductPage: React.FC<IProductPageProps> = ({ chosenProduct }) => {
  const { classes, cx } = useProductPageStyles();
  const [linkId, setLinkId] = React.useState<number>(1);

  const handleClickLink = (id: number) => {
    setLinkId(id as number);
  };

  return (
    <Box>
      <Box className={classes.panel}>
        <Box>
          <CollapsedBreadcrumbs productName={chosenProduct!.name} />
          <Typography component="h2" className={classes.productTitle}>
            {chosenProduct!.name}
          </Typography>
        </Box>
        <Box className={classes.buttonsBlock}>
          <IconButton
            className={classes.button}
            size="small"
            edge="start"
            color="inherit"
            aria-label="back"
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            className={classes.button}
            size="small"
            edge="start"
            color="inherit"
            aria-label="view"
          >
            <VisibilityIcon />
          </IconButton>
          <IconButton
            className={classes.button}
            size="small"
            edge="start"
            color="inherit"
            aria-label="copy"
          >
            <ContentCopyIcon />
          </IconButton>
        </Box>
      </Box>
      <List className={classes.linksList}>
        {links.map(link => {
          return (
            <ListItem
              key={link.id}
              className={classes.linksListItem}
              onClick={() => handleClickLink(link.id)}
            >
              <Typography
                className={cx(
                  classes.linksListText,
                  linkId === link.id ? 'active' : null
                )}
                component="p"
              >
                {link.name.toLocaleUpperCase()}
              </Typography>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      {linkId === 1 && <Basic />}
      {linkId === 2 && <Connections />}
      {linkId === 3 && <Images />}
      {linkId === 4 && <Attributes />}
      {linkId === 5 && <Options />}
      {linkId === 6 && <Discounts />}
    </Box>
  );
};

export default ProductPage;
