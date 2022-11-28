import * as React from 'react';
import Box from '@mui/material/Box';
import { GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

const MoreActions: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{ display: 'flex', justifyContent: 'center' }}
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
        sx={{ display: 'flex', justifyContent: 'center' }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <IconButton
            sx={{ display: 'flex', justifyContent: 'center' }}
            size="small"
            edge="start"
            color="inherit"
            aria-label="more-actions"
          >
            <DeleteIcon />
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton
            sx={{ display: 'flex', justifyContent: 'center' }}
            size="small"
            edge="start"
            color="inherit"
            aria-label="more-actions"
          >
            <EditIcon />
          </IconButton>
        </MenuItem>
      </Menu>
    </>
  );
};

export const rows = [
  { id: 1, name: 'Jon', status: 'Inactive', actions: 'help' },
  {
    id: 2,
    image: 'Lannister',
    name: 'Cersei',
    status: 'Active',
    actions: 'test',
  },
  {
    id: 3,
    image: 'Lannister',
    name: 'Jaime',
    status: 'Active',
    actions: 'clean',
  },
  {
    id: 4,
    image: 'Stark',
    name: 'Arya',
    status: 'Active',
    actions: 'drink',
  },
  {
    id: 5,
    image: 'Targaryen',
    name: 'Daenerys',
    status: 'Inactive',
    actions: 'more test',
  },
  {
    id: 6,
    image: 'Melisandre',
    name: null,
    status: 'Active',
    actions: 'check',
  },
  {
    id: 7,
    image: 'Clifford',
    name: 'Ferrara',
    status: 'Active',
    actions: 'filter',
  },
  {
    id: 8,
    image: 'Frances',
    name: 'Rossini',
    status: 'Inactive',
    actions: 'show',
  },
  {
    id: 9,
    image: 'Roxie',
    name: 'Harvey',
    status: 'Active',
    actions: 'hide',
  },
];

export const showImgColumn = rows.some(item => item.hasOwnProperty('image'));

export const columns: GridColDef[] = [
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
          <img src="" alt="" />
        </div>
      );
    },
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 330,
    editable: false,
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
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    width: 70,
    editable: false,
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            color: params.row.status === 'Active' ? 'green' : 'red',
            backgroundColor:
              params.row.status === 'Active' ? '#00800047' : '#ff00004a',
            borderRadius: '5px',
          }}
        >
          <p>{params.row.status}</p>
        </Box>
      );
    },
  },
  {
    field: 'actions',
    headerName: '',
    editable: false,
    sortable: false,
    disableColumnMenu: true,
    renderCell: () => <MoreActions />,
    width: 50,
  },
];
