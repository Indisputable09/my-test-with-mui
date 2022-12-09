import { makeStyles } from 'tss-react/mui';

export const useTableComponentStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    dataGrid: {
      '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
        width: '5px',
        height: '5px',
      },
      '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
        background: 'lightGrey',
        '&:hover': { background: 'grey' },
        borderRadius: '100vw',
      },
      transition: 'all 250ms ease-out',
      '&.dark': {
        color: '#fff',
        transition: 'all 250ms ease-out',
      },
      '&.dark button': {
        color: '#fff',
        transition: 'all 250ms ease-out',
      },
      '&.dark .MuiTablePagination-selectLabel': {
        color: '#fff',
        transition: 'all 250ms ease-out',
      },
      '&.dark .MuiTablePagination-select': {
        color: '#fff',
        transition: 'all 250ms ease-out',
      },
      '&.dark .MuiTablePagination-displayedRows': {
        color: '#fff',
        transition: 'all 250ms ease-out',
      },
      '&.dark .MuiSelect-icon': {
        color: '#fff',
        transition: 'all 250ms ease-out',
      },
      '& .MuiPaper-root': {
        backgroundColor: 'green',
      },
    },
    dataGridMenu: {
      transition: 'all 250ms ease-out',
      '&.dark': {
        backgroundColor: '#1F2A38',
        color: '#fff',
      },
    },
    checkbox: {
      color: 'inherit',
      transition: 'all 250ms ease-out',
      '&.dark': {
        color: '#90CAF9',
        transition: 'all 250ms ease-out',
      },
    },
    switch: {
      '&.dark .Mui-checked > .MuiSwitch-thumb': {
        color: '#90CAF9',
      },
      '&.dark .MuiSwitch-track': {
        backgroundColor: '#E0E0E0 !important',
      },
      '&.dark .Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#90CAF9 !important',
      },
    },
    moreActionsMenu: {
      display: 'flex',
      justifyContent: 'center',
      transition: 'all 250ms ease-out',
      '&.dark ul': {
        backgroundColor: '#1F2A38',
        color: '#fff',
      },
    },
    cellExpand: {
      padding: 5,
      '&.dark': {
        backgroundColor: '#1F2A38',
        color: '#fff',
      },
    },
  })
);
