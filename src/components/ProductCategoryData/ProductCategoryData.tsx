import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Divider, List, ListItem, Typography } from '@mui/material';
import CollapsedBreadcrumbs from '../Crumbs';
import { ProductType } from '../types/ProductTypes';
import {
  ProductCategoryBasic,
  ProductCategoryConnections,
  ProductCategoryImages,
  ProductCategorySEO,
} from './SubLinks';
import Modal from '../Modal';
import { useProductCategoryDataStyles } from './ProductCategoryData.styles';
import { useLocation, useParams } from 'react-router-dom';
import { productCategoriesRows } from '../../TableRows/TableRows';

interface IProductCategoryDataProps {
  darkTheme: boolean;
  initialLink: string;
}

const links = [
  { name: 'загальне', id: 1 },
  { name: "зв'язок", id: 2 },
  { name: 'зображення', id: 3 },
  { name: 'seo', id: 4 },
];

const ProductCategoryData: React.FC<IProductCategoryDataProps> = ({
  initialLink,
  darkTheme,
}) => {
  const { classes, cx } = useProductCategoryDataStyles();
  const [linkId, setLinkId] = React.useState<number>(1);
  const [openBackModal, setOpenBackModal] = React.useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState<boolean>(false);
  const [openSaveModal, setOpenSaveModal] = React.useState<boolean>(false);

  const { id } = useParams();
  const location = useLocation();
  const activePath = location.pathname.split('/');
  const chosenAction = activePath[activePath.length - 1];
  const chosenProduct = productCategoriesRows.find(
    row => row.id === Number(id)
  );

  const [categoryFieldsValues, setCategoryFieldsValues] = React.useState(
    chosenProduct && chosenAction === 'edit'
      ? {
          categoryName: chosenProduct.name,
          categoryDescription: '<p>Тут буде опис категорії</p>',
          parentCategory: null,
          sortOrder: 0,
          publishedCategory: true,
          categoryImages: [],
          metaTitle: '',
          metaDescription: '',
          SEOUrl: '',
        }
      : {
          categoryName: '',
          categoryDescription: '<p>Тут буде опис категорії</p>',
          parentCategory: null,
          sortOrder: 0,
          publishedCategory: true,
          categoryImages: [],
          metaTitle: '',
          metaDescription: '',
          SEOUrl: '',
        }
  );

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
      <Box className={classes.panel}>
        <Box>
          <CollapsedBreadcrumbs
            linksData={{
              link: '/products/productsCategories',
              name: chosenProduct ? chosenProduct.name : null,
              pageName: 'Категорії товарів',
            }}
            darkTheme={darkTheme}
          />
          {chosenProduct && (
            <Typography component="h2" className={classes.productTitle}>
              {chosenProduct.name}
            </Typography>
          )}
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
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          pt: '24px',
          pb: '48px',
        }}
      >
        {linkId === 1 && (
          <ProductCategoryBasic
            darkTheme={darkTheme}
            setCategoryFieldsValues={setCategoryFieldsValues}
            categoryFieldsValues={categoryFieldsValues}
          />
        )}
        {linkId === 2 && (
          <ProductCategoryConnections
            darkTheme={darkTheme}
            setCategoryFieldsValues={setCategoryFieldsValues}
            categoryFieldsValues={categoryFieldsValues}
          />
        )}
        {linkId === 3 && (
          <ProductCategoryImages
            darkTheme={darkTheme}
            setCategoryFieldsValues={setCategoryFieldsValues}
            categoryFieldsValues={categoryFieldsValues}
          />
        )}
        {linkId === 4 && (
          <ProductCategorySEO
            darkTheme={darkTheme}
            setCategoryFieldsValues={setCategoryFieldsValues}
            categoryFieldsValues={categoryFieldsValues}
          />
        )}
      </Box>
      {openBackModal && (
        <Modal
          shouldOpenModal={openBackModal}
          handleCloseModal={handleCloseModal}
          type={'back'}
          link={initialLink}
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
    </Box>
  );
};

export default ProductCategoryData;
