import { makeStyles } from 'tss-react/mui';

export const useHeaderStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    appbar: {
      background: '#ffffff',
      color: '#232D42',
      boxShadow: '0px 7px 11px -1px rgba(0,0,0,0.47)',
      position: 'relative',
      transition: 'all 250ms ease-out',
      '&.dark': {
        backgroundColor: '#212C3A',
        boxShadow: '0px 3px 11px -1px rgba(255,255,255,1);',
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
      backgroundColor: 'transparent',
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
    userName: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '1.75',
      color: '#232D42',
      transition: 'all linear 250ms',
      '&.dark': {
        color: '#ffffff',
      },
    },
    userEmail: {
      fontWeight: 400,
      fontSize: '13px',
      lineHeight: '1.3',
      color: '#8A92A6',
      transition: 'all linear 250ms',
      '&.dark': {
        color: '#c8cdd9',
      },
    },
    headerIconButton: {
      marginLeft: '8px',
    },
    headerIcon: {
      width: '40px',
      height: '40px',
      transition: 'all linear 250ms',
      [theme.breakpoints.down('sm')]: {
        width: '35px',
        height: '35px',
      },
      '&.dark': {
        color: '#ffffff',
      },
    },
  })
);
