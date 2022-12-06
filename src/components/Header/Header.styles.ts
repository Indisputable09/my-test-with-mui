import { makeStyles } from 'tss-react/mui';

export const useHeaderStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    appbar: {
      background: '#ffffff',
      color: '#232D42',
      boxShadow: '0px 7px 11px -1px rgba(0,0,0,0.47)',
      position: 'relative',
      transition: 'background-color 250ms ease-out',
      '&.dark': {
        backgroundColor: '#303030',
      },
    },
    menuToggler: {
      color: '#000000',
      transition: 'color 250ms ease-out',
      '&.dark': {
        color: '#ffffff',
      },
    },
    logo: {
      display: 'flex',
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
      transition: 'all linear 250ms',
      '&.dark': {
        color: '#ffffff',
      },
      '&:hover': {
        textDecoration: 'none',
        transform: 'scale(1.1)',
        color: 'inherit',
        '&.dark': {
          color: '#ffffff',
        },
      },
    },
    cashButton: {
      padding: '6px 16px 6px 16px',
      marginRight: '8px',
      fontSize: '11px',
      backgroundColor: '#3A57E8',
      transition: 'all linear 250ms',
      '&.dark': {
        backgroundColor: 'inherit',
        border: '1px solid #fff',
      },
    },
    credentials: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    headerIcon: {
      width: '40px',
      height: '40px',
      [theme.breakpoints.down('sm')]: {
        width: '35px',
        height: '35px',
      },
    },
  })
);
