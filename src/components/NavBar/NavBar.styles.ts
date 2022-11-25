import { makeStyles } from 'tss-react/mui';

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
      [theme.breakpoints.down('sm')]: {
        top: '56px',
        height: 'calc(100vh - 56px)',
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
      [theme.breakpoints.down('sm')]: {
        height: 'calc(100vh - 56px)',
      },
      overflowX: 'hidden',
      backgroundColor: 'rgb(227, 242, 253)',
    },
    container: {
      marginLeft: 0,
      position: 'relative',
      top: 0,
      left: 0,
      transform: 'TranslateX(0)',
      transition: 'transform 250ms ease-out',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      '&.active': {
        transform: `TranslateX(${drawerWidth}px)`,
      },
    },
  })
);
