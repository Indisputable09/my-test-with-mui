import { makeStyles } from 'tss-react/mui';

export const useHeaderStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    appbar: {
      background: '#ffffff',
      color: '#232D42',
      // boxShadow: '0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)',
      boxShadow: '0px 7px 11px -1px rgba(0,0,0,0.47)',
      position: 'relative',
    },
    logo: {
      display: 'flex',
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
      transition: 'all linear 250ms',
      '&:hover': {
        textDecoration: 'none',
        transform: 'scale(1.1)',
        color: 'inherit',
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
