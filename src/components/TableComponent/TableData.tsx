import * as React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';

interface IControlledSwitchProps {
  status: string;
}

const ControlledSwitch: React.FC<IControlledSwitchProps> = ({ status }) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={status === 'Active' && checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      color="success"
    />
  );
};

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
            aria-label="delete"
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
            aria-label="edit"
          >
            <EditIcon />
          </IconButton>
        </MenuItem>
      </Menu>
    </>
  );
};

export const rows = [
  { id: 1, name: 'Jon', status: 'Inactive' },
  {
    id: 2,
    image: 'Lannister',
    name: 'Cersei',
    status: 'Active',
  },
  {
    id: 3,
    image: 'Lannister',
    name: 'Jaime',
    status: 'Active',
  },
  {
    id: 4,
    image: 'Stark',
    name: 'Arya',
    status: 'Active',
  },
  {
    id: 5,
    image: 'Targaryen',
    name: 'Daenerys',
    status: 'Inactive',
  },
  {
    id: 6,
    image: 'Melisandre',
    name: 'Daenerys',
    status: 'Active',
  },
  {
    id: 7,
    image: 'Clifford',
    name: 'Ferrara',
    status: 'Active',
  },
  {
    id: 8,
    image: 'Frances',
    name: 'Rossini',
    status: 'Inactive',
  },
  {
    id: 9,
    image: 'Roxie',
    name: 'Harvey',
    status: 'Active',
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
      return <ControlledSwitch status={params.row.status} />;
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
