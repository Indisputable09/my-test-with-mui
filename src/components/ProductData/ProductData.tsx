import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Divider, List, ListItem, Typography } from '@mui/material';
import CollapsedBreadcrumbs from '../Crumbs';
import { useProductDataStyles } from './ProductData.styles';
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
import { useLocation, useParams } from 'react-router-dom';
import { productRows } from '../../TableRows/TableRows';

interface IProductDataProps {
  initialLink: string;
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

const ProductData: React.FC<IProductDataProps> = ({
  darkTheme,
  initialLink,
}) => {
  const { classes, cx } = useProductDataStyles();
  const [linkId, setLinkId] = React.useState<number>(1);
  const [openBackModal, setOpenBackModal] = React.useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState<boolean>(false);
  const [openSaveModal, setOpenSaveModal] = React.useState<boolean>(false);

  const { id } = useParams();
  const location = useLocation();
  const activePath = location.pathname.split('/');
  const chosenAction = activePath[activePath.length - 1];
  const chosenProduct = productRows.find(row => row.id === Number(id));

  // console.log('chosenProduct', chosenProduct);
  // console.log('activePath', activePath);
  // console.log('location', location);

  const [fieldsValues, setFieldsValues] = React.useState(
    chosenProduct && chosenAction === 'edit'
      ? {
          name: chosenProduct.name,
          sku: chosenProduct.sku,
          description: '<p>Тут буде опис</p>',
          price: chosenProduct.price,
          minQuantity: 0,
          inStock: 0,
          fromStock: 'no',
          published: true,
          sort: 0,
          producer: null,
          category: chosenProduct.category,
          showInCategories: [],
          relatedProducts: [],
          featuredProducts: [],
          attributes: [],
          images: [],
        }
      : {
          name: '',
          sku: '',
          description: '<p>Тут буде опис</p>',
          price: 0,
          minQuantity: 0,
          inStock: 0,
          fromStock: 'no',
          published: true,
          sort: 0,
          producer: null,
          category: null,
          showInCategories: [],
          relatedProducts: [],
          featuredProducts: [],
          attributes: [],
          images: [],
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
              link: '/products/productsCatalog',
              name: chosenProduct ? chosenProduct.name : null,
              pageName: 'Каталог товарів',
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
          <Basic
            darkTheme={darkTheme}
            setFieldsValues={setFieldsValues}
            fieldsValues={fieldsValues}
          />
        )}
        {linkId === 2 && (
          <Data
            darkTheme={darkTheme}
            setFieldsValues={setFieldsValues}
            fieldsValues={fieldsValues}
          />
        )}
        {linkId === 3 && (
          <Connections
            darkTheme={darkTheme}
            setFieldsValues={setFieldsValues}
            fieldsValues={fieldsValues}
          />
        )}
        {linkId === 4 && (
          <Images
            darkTheme={darkTheme}
            setFieldsValues={setFieldsValues}
            fieldsValues={fieldsValues}
          />
        )}
        {linkId === 5 && (
          <Attributes
            darkTheme={darkTheme}
            setFieldsValues={setFieldsValues}
            fieldsValues={fieldsValues}
          />
        )}
        {linkId === 6 && <Options />}
        {linkId === 7 && <Discounts />}
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

export default ProductData;
