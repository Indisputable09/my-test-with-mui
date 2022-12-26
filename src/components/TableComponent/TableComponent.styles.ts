import { makeStyles } from 'tss-react/mui';

export const useTableComponentStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    tableToolbarBlock: {
      width: '100%',
      transition: 'all 250ms ease-out',
      boxShadow:
        '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      '&.dark': {
        boxShadow:
          '0px 2px 1px -1px rgba(255, 255, 255, 0.2), 0px 1px 1px rgba(255, 255, 255, 0.14), 0px 1px 3px rgba(255, 255, 255, 0.12)',
      },
    },
    dataGrid: {
      border: 'none',
      borderTop: 'none',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0',
      transition: 'all 250ms ease-out',
      '&.dark div[data-field="name"]': { fontWeight: 400, color: '#F2F2F2' },
      '&.dark div[data-field="sku"]': {
        fontWeight: 500,
        color: '#ffffff',
      },
      '&.dark div[data-field="price"]': { fontWeight: 500, color: '#ffffff' },
      '&.dark div[data-field="quantity"]': {
        fontWeight: 500,
        color: '#ffffff',
      },
      '&.dark div[data-field="category"]': {
        fontWeight: 500,
        color: '#ffffff',
      },
      '& div[data-field="name"]': {
        fontWeight: 400,
        color: '#000000',
        opacity: '0.87',
      },
      '& div[data-field="sku"]': {
        fontWeight: 500,
        color: '#000000',
        opacity: '0.87',
      },
      '& div[data-field="price"]': {
        fontWeight: 500,
        color: '#000000',
        opacity: '0.87',
      },
      '& div[data-field="quantity"]': {
        fontWeight: 500,
        color: '#000000',
        opacity: '0.87',
      },
      '& div[data-field="category"]': {
        fontWeight: 500,
        color: '#000000',
        opacity: '0.87',
      },
      '& .MuiCheckbox-colorPrimary:not(.Mui-checked)': {
        color: '#000000',
        opacity: '0.6',
      },
      '&.dark .MuiCheckbox-colorPrimary:not(.Mui-checked)': {
        color: '#ffffff',
        opacity: '0.7',
      },
      '&.dark .MuiDataGrid-cell': {
        transition: 'all 250ms ease-out',
        borderBottom: 'none',
      },
      '&.dark .MuiDataGrid-columnHeaders': {
        transition: 'all 250ms ease-out',
        borderBottom: 'none',
      },
      '&.dark .MuiDataGrid-footerContainer': {
        transition: 'all 250ms ease-out',
        borderTop: 'none',
      },
      '& .MuiDataGrid-columnSeparator': {
        display: 'none',
      },
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
      '&.dark': {
        color: '#fff',
        transition: 'all 250ms ease-out',
      },
      '&.dark button': {
        color: '#fff',
        transition: 'all 250ms ease-out',
      },
      '&.dark .MuiTablePagination-selectLabel': {
        color: '#ffffff',
        opacity: '0.7',
        transition: 'all 250ms ease-out',
      },
      '& .MuiTablePagination-selectLabel': {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '1.6',
        color: '#000000',
        opacity: '0.6',
        transition: 'all 250ms ease-out',
      },
      '&.dark .MuiTablePagination-select': {
        color: '#ffffff',
        opacity: '0.7',
        transition: 'all 250ms ease-out',
      },
      '& .MuiTablePagination-select': {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '1.6',
        color: '#000000',
        opacity: '0.6',
        transition: 'all 250ms ease-out',
      },
      '&.dark .MuiTablePagination-displayedRows': {
        color: '#ffffff',
        opacity: '0.7',
        transition: 'all 250ms ease-out',
      },
      '& .MuiTablePagination-displayedRows': {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '1.6',
        color: '#000000',
        opacity: '0.6',
        transition: 'all 250ms ease-out',
      },
      '&.dark .MuiSelect-icon': {
        color: '#ffffff',
        opacity: '0.7',
        transition: 'all 250ms ease-out',
      },
      '& .MuiSelect-icon': {
        color: '#000000',
        opacity: '0.6',
        transition: 'all 250ms ease-out',
      },
      '&.dark .MuiTablePagination-actions': {
        color: '#ffffff',
        opacity: '0.7',
        transition: 'all 250ms ease-out',
      },
      '& .MuiTablePagination-actions': {
        color: '#000000',
        opacity: '0.6',
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
      '& .Mui-checked > .MuiSwitch-thumb': {
        color: '#1976D2',
      },
      '& .MuiSwitch-track': {
        backgroundColor: '#000000 !important',
      },
      '& .Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#1976D2 !important',
      },
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
    editIcon: {
      transition: 'all 250ms ease-out',
      'button:hover > &': {
        color: '#219653',
        filter: 'drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.25))',
      },
      'button:hover > &.dark, button:focus > &.dark': {
        filter: 'drop-shadow(2px 2px 0px rgba(255, 255, 255, 0.25))',
      },
    },
    moreIconButton: {
      display: 'flex',
      justifyContent: 'center',
      transition: 'all 250ms ease-out',
      borderRadius: '4px',
      '&:hover, &:focus': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
      '&.dark:hover, &.dark:focus': {
        backgroundColor: 'rgba(144, 202, 249, 0.08)',
      },
    },
    deleteIcon: {
      transition: 'color 250ms ease-out',
      'button:hover > &': {
        color: '#EB5757',
        filter: 'drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.25))',
      },
      'button:hover > &.dark': {
        filter: 'drop-shadow(2px 2px 0px rgba(255, 255, 255, 0.25))',
      },
    },
    discountText: {
      fontSize: '9px',
      position: 'absolute',
      color: 'red',
      top: '0',
      left: '0',
      border: '2px solid grey',
      borderRadius: '4px',
      padding: '0 0.5px',
      transition: 'all 250ms ease-out',
      '&.dark': {
        backgroundColor: '#ffffff',
        opacity: '0.9',
      },
    },
    totalPrice: {
      fontSize: '15px',
      position: 'absolute',
      textDecoration: 'none',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      '&.discount': {
        fontSize: '12px',
        position: 'absolute',
        textDecoration: 'line-through',
        bottom: '0',
        marginTop: '8px',
        transform: 'translateX(-50%)',
      },
    },
    withDiscountPrice: {
      fontSize: '15px',
      position: 'absolute',
      top: '14px',
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'green',
    },
  })
);
