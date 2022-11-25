import { makeStyles } from 'tss-react/mui';

export const useNavBarMenuItemStyles = makeStyles<void>()((theme, _params, classes) => ({
    menuPrimaryItem: { color: '#111111', fontWeight: 600, fontSize: '16px', lineHeight: '1.75' },
    menuSecondaryItemList: {},
    menuSecondaryItem: {
        position: 'relative',
        color: '#8A92A6',
        paddingLeft: '90px',
    },
    menuItemIcon: {
        color: '#000',
    },
}));
