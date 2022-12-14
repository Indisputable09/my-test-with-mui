import { makeStyles } from 'tss-react/mui';

export const useToolbarStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    toolbarContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 80,
      width: '100%',
      backgroundColor: '#fff',
      marginBottom: '16px',
      padding: '0 16px 0 16px',
      borderRadius: '10px',
      transition: 'all 250ms ease-out',
      '&.dark': { backgroundColor: '#24303F' },
      border: '1px solid #ffffff',
    },
    searchField: { width: '720px' },
    searchIconButton: {
      transition: 'all 250ms ease-out',
      '&:hover': {
        backgroundColor: 'transparent',
        transition: 'all 250ms ease-out',
        '& svg': {
          transition: 'all 250ms ease-out',
          transform: 'scale(1.3)',
        },
      },
      '&.dark svg': {
        transition: 'all 250ms ease-out',
        color: '#ffffff',
      },
      '&.dark:hover svg': {
        transition: 'all 250ms ease-out',
        transform: 'scale(1.3)',
      },
    },
    addButton: {
      padding: '8px 16px 8px 16px',
      fontSize: '11px',
      backgroundColor: '#3A57E8',
      color: '#fff',
      transition: 'all 250ms ease-out',
      '&.dark': {
        backgroundColor: 'transparent',
        border: '1px solid #fff',
      },
    },
  })
);
