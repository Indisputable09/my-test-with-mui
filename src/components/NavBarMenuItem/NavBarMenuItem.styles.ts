import { makeStyles } from 'tss-react/mui';

export const useNavBarMenuItemStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    menuPrimaryItem: {
      '& ~ div a.active svg': {
        color: 'red',
      },
      // color: '#111111',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '1.75',
      transition: 'all 250ms ease-out',
      '&.dark': {
        color: '#ffffff',
      },
    },
    menuSecondaryItemList: {},
    menuSecondaryItem: {
      position: 'relative',
      color: '#8A92A6',
      transition: 'all 250ms ease-out',
      '& > a': {
        display: 'block',
        fontSize: '16px',
        paddingLeft: '60px',
        width: '100%',
        color: '#8A92A6',
      },
      '& > a.active': {
        color: '#1b0b08',
        '& span': {
          fontSize: '19px',
        },
      },
      '&.dark > a': {
        color: '#c8cdd9',
      },
      '&.dark > a.active': {
        color: '#fef3f2',
        '& span': {
          fontSize: '19px',
        },
      },
    },
    menuItemIcon: {
      color: '#111111',
      transition: 'all 250ms ease-out',
      '&.active': { color: '#1976D2' },
      '&.dark': {
        color: '#ffffff',
      },
      '&.dark.active': {
        color: '#90CAF9',
      },
    },
  })
);
