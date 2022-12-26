import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import { Box, Typography } from '@mui/material';
import img1 from '../../images/product_mini_1.jpeg';
import img2 from '../../images/product_mini_2.jpeg';
import { useTableComponentStyles } from './TableComponent.styles';
import Modal from '../Modal';

interface IControlledSwitchProps {
  status: string;
  darkTheme: boolean;
}

interface IPriceCellProps {
  price: number;
  discount: number | null;
  darkTheme: boolean;
}

interface IMoreActionsProps {
  darkTheme: boolean;
}

export const ControlledSwitch: React.FC<IControlledSwitchProps> = ({
  status,
  darkTheme,
}) => {
  const [checked, setChecked] = React.useState<boolean>(
    status === 'Active' ? true : false
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const { classes, cx } = useTableComponentStyles();

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      color="success"
      className={cx(classes.switch, darkTheme ? 'dark' : null)}
    />
  );
};

interface IFAQActionsProps {
  darkTheme: boolean;
}

export const FAQActions: React.FC<IFAQActionsProps> = ({ darkTheme }) => {
  const [openDeleteModal, setOpenDeleteModal] = React.useState<boolean>(false);

  const handleClickOpenModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseModal = () => {
    setOpenDeleteModal(false);
  };

  const { classes, cx } = useTableComponentStyles();

  return (
    <>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <IconButton
          sx={{ display: 'flex', justifyContent: 'center', ml: 1 }}
          size="large"
          edge="start"
          color="inherit"
          aria-label="edit"
        >
          <EditIcon
            className={cx(classes.editIcon, darkTheme ? 'dark' : null)}
          />
        </IconButton>
        <IconButton
          sx={{ display: 'flex', justifyContent: 'center' }}
          size="large"
          edge="start"
          color="inherit"
          aria-label="delete"
          onClick={handleClickOpenModal}
        >
          <DeleteIcon
            className={cx(classes.deleteIcon, darkTheme ? 'dark' : null)}
          />
        </IconButton>
      </Box>
      {openDeleteModal && (
        <Modal
          shouldOpenModal={openDeleteModal}
          handleCloseModal={handleCloseModal}
          type={'delete'}
        />
      )}
    </>
  );
};

export const MoreActions: React.FC<IMoreActionsProps> = ({ darkTheme }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openDeleteModal, setOpenDeleteModal] = React.useState<boolean>(false);

  const handleClickOpenModal = () => {
    handleClose();
    setOpenDeleteModal(true);
  };

  const handleCloseModal = () => {
    setOpenDeleteModal(false);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { classes, cx } = useTableComponentStyles();

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <IconButton
        sx={{ display: 'flex', justifyContent: 'center', ml: 1 }}
        size="large"
        edge="start"
        color="inherit"
        aria-label="edit"
      >
        <EditIcon className={cx(classes.editIcon, darkTheme ? 'dark' : null)} />
      </IconButton>
      <IconButton
        className={cx(classes.moreIconButton, darkTheme ? 'dark' : null)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="more-actions"
        onClick={handleMenu}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="menu-actions"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className={cx(classes.moreActionsMenu, darkTheme ? 'dark' : null)}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <IconButton
              sx={{ display: 'flex', justifyContent: 'center' }}
              size="small"
              edge="start"
              color="inherit"
              aria-label="view"
            >
              <VisibilityIcon />
            </IconButton>
            <Typography variant="h6" component="p" fontSize={15}>
              Переглянути
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <IconButton
              sx={{ display: 'flex', justifyContent: 'center' }}
              size="small"
              edge="start"
              color="inherit"
              aria-label="copy"
            >
              <ContentCopyIcon />
            </IconButton>
            <Typography variant="h6" component="p" fontSize={15}>
              Копіювати
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleClickOpenModal}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <IconButton
              sx={{ display: 'flex', justifyContent: 'center' }}
              size="small"
              edge="start"
              color="inherit"
              aria-label="delete"
              // onClick={handleClickOpenModal}
            >
              <DeleteIcon />
            </IconButton>
            <Typography variant="h6" component="p" fontSize={15}>
              Видалити
            </Typography>
          </Box>
        </MenuItem>
      </Menu>
      {openDeleteModal && (
        <Modal
          shouldOpenModal={openDeleteModal}
          handleCloseModal={handleCloseModal}
          type={'delete'}
        />
      )}
    </Box>
  );
};

export const PriceCell: React.FC<IPriceCellProps> = ({
  price,
  discount,
  darkTheme,
}) => {
  const { classes, cx } = useTableComponentStyles();
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        component="p"
        className={cx(
          classes.totalPrice,
          darkTheme ? 'dark' : null,
          discount ? 'discount' : null
        )}
      >
        {price} грн
      </Typography>
      {discount && (
        <>
          <Typography
            variant="h6"
            component="p"
            className={cx(classes.discountText, darkTheme ? 'dark' : null)}
          >
            -{discount}%
          </Typography>
          <Typography
            variant="h6"
            component="p"
            className={cx(classes.withDiscountPrice, darkTheme ? 'dark' : null)}
          >
            {price - (price * discount) / 100} грн
          </Typography>
        </>
      )}
    </Box>
  );
};

export const productRows = [
  {
    id: 1,
    image: img1,
    sku: 'ART-2',
    price: 1000,
    quantity: 2,
    category: 'Mobile phone',
    name: 'В цій бібліотеці ще немає можливості робити рядки автоматичної висоти залежно від вмісту контенту, тому приходиться виходити з цієї ситуації кастомними шляхами',
    status: 'Inactive',
  },
  {
    id: 2,
    image: img1,
    name: 'Cersei',
    sku: 'ART-3',
    quantity: 20,
    price: 1500,
    discount: 20,
    status: 'Active',
    category: 'Mobile phone',
  },
  {
    id: 3,
    image: img2,
    name: 'Jaime',
    quantity: 25,
    price: 1800,
    status: 'Active',
    category: 'Mobile phone',
  },
  {
    id: 4,
    image: img1,
    name: 'Arya',
    quantity: 222,
    price: 20000,
    discount: 20,
    status: 'Active',
  },
  {
    id: 5,
    image: img2,
    name: 'Daenerys',
    price: 20000,
    status: 'Inactive',
  },
  {
    id: 6,
    image: img2,
    name: 'Daenerys',
    price: 1500,
    discount: 80,
    status: 'Active',
  },
  {
    id: 7,
    image: img2,
    name: 'Ferrara',
    price: 100,
    discount: 20,
    status: 'Active',
  },
  {
    id: 8,
    image: img2,
    name: 'Rossini',
    price: 1000,
    discount: 25,
    status: 'Inactive',
  },
  {
    id: 9,
    image: img2,
    name: 'Harvey',
    price: 300,
    discount: 5,
    status: 'Active',
  },
];

export const productCategoriesRows = [
  {
    id: 1,
    image: img1,
    name: 'Тут буде довга категорія товару, щоб зрозуміти, як все працює. Якщо так сподобається - то ми так і залишимо. Сподіваюсь, що все сподобається!',
    sort: 5,
  },
  {
    id: 2,
    image: img1,
    name: 'Рандомна категорія 2',
    sort: 15,
  },
  {
    id: 3,
    image: img2,
    name: 'Рандомна категорія 3',
    sort: 22,
  },
  {
    id: 4,
    image: img1,
    name: 'Рандомна категорія 4',
    sort: 1,
  },
  {
    id: 5,
    image: img2,
    name: 'Рандомна категорія 5',
    sort: 44,
  },
  {
    id: 6,
    image: img2,
    name: 'Рандомна категорія 6',
    sort: 4,
  },
  {
    id: 7,
    image: img2,
    name: 'Рандомна категорія 7',
    sort: 40,
  },
  {
    id: 8,
    image: img2,
    name: 'Рандомна категорія 8',
    sort: 3,
  },
  {
    id: 9,
    image: img2,
    name: 'Рандомна категорія 9',
    sort: 1,
  },
];

export const FAQRows = [
  {
    id: 1,
    name: 'Тут буде довге питання, щоб зрозуміти, як все працює. Якщо так сподобається - то ми так і залишимо. Сподіваюсь, що все сподобається!',
  },
  {
    id: 2,
    name: 'Рандомне питання 2',
  },
  {
    id: 3,
    name: 'Рандомне питання 3',
  },
  {
    id: 4,
    name: 'Рандомне питання 4',
  },
  {
    id: 5,
    name: 'Рандомне питання 5',
  },
  {
    id: 6,
    name: 'Рандомне питання 6',
  },
  {
    id: 7,
    name: 'Рандомне питання 7',
  },
  {
    id: 8,
    name: 'Рандомне питання 8',
  },
  {
    id: 9,
    name: 'Рандомне питання 9',
  },
];

export const languagesRows = [
  {
    id: 1,
    name: 'Українська',
  },
  {
    id: 2,
    name: 'English',
  },
];

export const citiesRows = [
  {
    id: 1,
    name: 'Київ',
  },
  {
    id: 2,
    name: 'Харків',
  },
];

export const showImgColumn = productRows.some(item =>
  item.hasOwnProperty('image')
);
