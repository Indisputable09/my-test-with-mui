import React from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';

import IconExpandLess from '@mui/icons-material/ExpandLess';
import IconExpandMore from '@mui/icons-material/ExpandMore';
import { useNavBarMenuItemStyles } from './NavBarMenuItem.styles';
// import NavBarMenuItemContent from '../NavBarMenuItemContent';
import { NavLink, useLocation } from 'react-router-dom';

export const NavBarMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  primaryLinkName: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
  id: PropTypes.number,
};

type NavBarMenuItemPropsTypes = PropTypes.InferProps<
  typeof NavBarMenuItemPropTypes
>;
type NavBarMenuItemPropsWithoutItems = Omit<NavBarMenuItemPropsTypes, 'items'>;

export type NavBarMenuItemProps = NavBarMenuItemPropsWithoutItems & {
  items?: NavBarMenuItemProps[];
  darkTheme?: boolean;
  openDrawer?: boolean;
};

const NavBarMenuItem: React.FC<NavBarMenuItemProps> = (
  props: NavBarMenuItemProps
) => {
  const { classes, cx } = useNavBarMenuItemStyles();
  const {
    name,
    Icon,
    items = [],
    id,
    darkTheme,
    openDrawer,
    primaryLinkName,
  } = props;
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  function handleClick() {
    if (openDrawer) setOpen(!open);
  }

  const activeIcon = activePath.includes(primaryLinkName as string);
  // const activeIcon = activePath.includes('products') && name === 'Продукція';

  const MenuItemRoot = (
    <ListItem
      button
      className={cx(classes.menuPrimaryItem, darkTheme ? 'dark' : null)}
      onClick={handleClick}
    >
      {!!Icon && (
        <ListItemIcon
          className={cx(
            classes.menuItemIcon,
            darkTheme ? 'dark' : null,
            activeIcon ? 'active' : null
          )}
        >
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />

      {isExpandable && !open && id !== 1 && <IconExpandMore />}
      {isExpandable && !open && id === 1 && <IconExpandLess />}
      {isExpandable && open && id !== 1 && <IconExpandLess />}
      {isExpandable && open && id === 1 && <IconExpandMore />}
    </ListItem>
  );

  const MenuItemChildren = (
    <Collapse
      in={id === 1 ? !open && openDrawer : open && openDrawer}
      timeout="auto"
      unmountOnExit
    >
      <Divider />
      <List
        component="div"
        disablePadding
        className={classes.menuSecondaryItemList}
      >
        {items.map((item, index) => {
          return (
            <ListItem
              key={index}
              className={cx(
                classes.menuSecondaryItem,
                darkTheme ? 'dark' : null
              )}
            >
              <NavLink to={item.link as string}>
                <ListItemText primary={item.name} inset={!Icon} />
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    </Collapse>
  );
  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};

export default NavBarMenuItem;
