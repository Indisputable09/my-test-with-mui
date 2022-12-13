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
