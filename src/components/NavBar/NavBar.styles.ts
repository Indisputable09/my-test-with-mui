import { createTheme } from '@mui/system';
import { makeStyles } from 'tss-react/mui';

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1200,
      xl: 1450,
    },
  },
});

export const drawerWidth = 260;

export const useNavBarStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    root: {
      display: 'flex',
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
      transform: 'TranslateX(-100%)',
      transition: 'transform 250ms ease-out',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      '&.active': {
        transform: 'TranslateX(0)',
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
      backgroundColor: 'rgb(227, 242, 253)',
    },
    overlay: {
      [customTheme.breakpoints.down('xl')]: {
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 250ms linear',
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
      maxWidth: '100%',
      marginRight: 'auto',
      marginLeft: 'auto',
      position: 'relative',
      top: 0,
      left: 0,
      transform: 'TranslateX(0)',
      transition: 'all 250ms ease-out',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      '&.active': {
        [customTheme.breakpoints.up('xl')]: {
          marginLeft: 0,
          transform: `TranslateX(${drawerWidth}px)`,
        },
      },
    },
  })
);
