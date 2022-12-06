import { makeStyles } from 'tss-react/mui';

export const useNavBarMenuItemStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    menuPrimaryItem: {
      color: '#111111',
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
      paddingLeft: '90px',
      transition: 'all 250ms ease-out',
      '&.dark': {
        color: '#c8cdd9',
      },
    },
    menuItemIcon: {
      color: '#111111',
      transition: 'all 250ms ease-out',
      '&.dark': {
        color: '#ffffff',
      },
    },
  })
);
