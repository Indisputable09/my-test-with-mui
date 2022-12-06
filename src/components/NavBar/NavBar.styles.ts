import { createTheme } from '@mui/system';
import { makeStyles } from 'tss-react/mui';

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1330,
      xl: 1450,
    },
  },
});

export const drawerWidth = 260;
export const miniDrawerWidth = 60;

export const useNavBarStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    root: {
      display: 'flex',
    },
    miniDrawerPaper: {
      width: miniDrawerWidth,
      backgroundColor: '#fff',
      position: 'absolute',
      height: 'calc(100vh - 64px)',
      top: '64px',
      [customTheme.breakpoints.down('sm')]: {
        top: '51px',
        height: 'calc(100vh - 51px)',
      },
      left: 0,
      overflowX: 'hidden',
      transform: 'TranslateX(0) scale(1)',
      transition: 'transform 500ms ease-out, backgroundColor 250ms ease-out',
      whiteSpace: 'nowrap',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      boxShadow: '7px 4px 11px -1px rgba(0,0,0,0.47)',

      '&.dark': {
        backgroundColor: '#303030',
      },

      '&.hide': {
        transform: 'TranslateX(-100%) scale(0)',
      },
    },
    drawerPaper: {
      position: 'absolute',
      height: 'calc(100vh - 64px)',
      top: '64px',
      [customTheme.breakpoints.down('sm')]: {
        top: '51px',
        height: 'calc(100vh - 51px)',
      },
      left: 0,
      overflowX: 'hidden',
      transform: 'TranslateX(-100%) scale(0)',
      transition: 'transform 500ms ease-out',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      boxShadow: '7px 4px 11px -1px rgba(0,0,0,0.47)',
      '&.active': {
        transform: 'TranslateX(0) scale(1)',
      },
      '&::-webkit-scrollbar': {
        width: '5px',
      },
      '&::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'lightGrey',
        '&:hover': { background: 'grey' },
        borderRadius: '100vw',
      },
    },
    content: {
      flexGrow: 1,
      height: 'calc(100vh - 64px)',
      [customTheme.breakpoints.down('sm')]: {
        height: 'calc(100vh - 56px)',
      },
      overflowX: 'hidden',
      backgroundColor: '#fff',
    },
    overlay: {
      [customTheme.breakpoints.down('xl')]: {
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 500ms linear',
        '&.active': {
          opacity: 1,
          pointerEvents: 'auto',
          position: 'absolute',
          width: '100%',
          height: 'calc(100vh - 64px)',
          top: '64px',
          [customTheme.breakpoints.down('sm')]: {
            top: '51px',
            height: 'calc(100vh - 51px)',
          },
          left: 0,
          zIndex: 2,
          backgroundColor: '#dabcb778',
        },
      },
    },
    container: {
      [customTheme.breakpoints.down('lg')]: {
        paddingLeft: '74px',
      },
      maxWidth: '100%',
      marginRight: 'auto',
      marginLeft: 'auto',
      position: 'relative',
      top: 0,
      left: 0,
      transform: 'TranslateX(0)',
      transition: 'all 250ms ease-out',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(8),
      '&.active': {
        transform: `TranslateX(${miniDrawerWidth}px)`,
        [customTheme.breakpoints.up('xl')]: {
          marginLeft: 0,
          transform: `TranslateX(${drawerWidth}px)`,
        },
      },
    },
  })
);
