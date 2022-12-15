import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
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
  Data,
} from './SubLinks';
import Modal from '../Modal';

interface IProductPageProps {
  chosenProduct: ProductType;
  darkTheme: boolean;
}

const links = [
  { name: 'загальне', id: 1 },
  { name: 'данні', id: 2 },
  { name: "зв'язок", id: 3 },
  { name: 'зображення', id: 4 },
  { name: 'атрибути', id: 5 },
  { name: 'опції', id: 6 },
  { name: 'акції', id: 7 },
  { name: 'seo', id: 8 },
];

const ProductPage: React.FC<IProductPageProps> = ({
  chosenProduct,
  darkTheme,
}) => {
  const { classes, cx } = useProductPageStyles();
  const [linkId, setLinkId] = React.useState<number>(1);
  const [openBackModal, setOpenBackModal] = React.useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState<boolean>(false);
  const [openSaveModal, setOpenSaveModal] = React.useState<boolean>(false);

  const handleClickOpenModal = (variant: string) => {
    if (variant === 'back') {
      setOpenBackModal(true);
    } else if (variant === 'delete') {
      setOpenDeleteModal(true);
    } else if (variant === 'save') {
      setOpenSaveModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenBackModal(false);
    setOpenDeleteModal(false);
    setOpenSaveModal(false);
  };

  const handleClickLink = (id: number) => {
    setLinkId(id as number);
  };

  return (
    <Box>
      {openBackModal && (
        <Modal
          shouldOpenModal={openBackModal}
          handleCloseModal={handleCloseModal}
          type={'back'}
        />
      )}
      {openDeleteModal && (
        <Modal
          shouldOpenModal={openDeleteModal}
          handleCloseModal={handleCloseModal}
          type={'delete'}
        />
      )}
      {openSaveModal && (
        <Modal
          shouldOpenModal={openSaveModal}
          handleCloseModal={handleCloseModal}
          type={'save'}
        />
      )}
      <Box className={classes.panel}>
        <Box>
          <CollapsedBreadcrumbs
            productName={chosenProduct!.name}
            darkTheme={darkTheme}
          />
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
            onClick={() => handleClickOpenModal('back')}
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
            aria-label="save"
            onClick={() => handleClickOpenModal('save')}
          >
            <SaveIcon />
          </IconButton>
          <IconButton
            className={classes.button}
            size="small"
            edge="start"
            color="inherit"
            aria-label="delete"
            onClick={() => handleClickOpenModal('delete')}
          >
            <DeleteIcon />
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
                  linkId === link.id ? 'active' : null,
                  darkTheme ? 'dark' : null
                )}
                component="p"
              >
                {link.name.toLocaleUpperCase()}
              </Typography>
            </ListItem>
          );
        })}
      </List>
      <Divider className={cx(classes.divider, darkTheme ? 'dark' : null)} />
      {linkId === 1 && <Basic darkTheme={darkTheme} />}
      {linkId === 2 && <Data darkTheme={darkTheme} />}
      {linkId === 3 && <Connections darkTheme={darkTheme} />}
      {linkId === 4 && <Images />}
      {linkId === 5 && <Attributes darkTheme={darkTheme} />}
      {linkId === 6 && <Options />}
      {linkId === 7 && <Discounts />}
    </Box>
  );
};

export default ProductPage;
