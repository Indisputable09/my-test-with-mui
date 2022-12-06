import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { useHeaderStyles } from './Header.styles';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface HeaderProps {
  toggleDrawer: (open: boolean) => void;
  openDrawer: boolean;
  darkTheme: boolean;
}

const Header: React.FC<HeaderProps> = ({
  toggleDrawer,
  openDrawer,
  darkTheme,
}) => {
  const { classes, cx } = useHeaderStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickAuth = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAuth(!auth);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={cx(classes.appbar, darkTheme ? 'dark' : null)}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(!openDrawer)}
          >
            {openDrawer ? (
              <CloseIcon
                className={cx(classes.menuToggler, darkTheme ? 'dark' : null)}
              />
            ) : (
              <MenuIcon
                className={cx(classes.menuToggler, darkTheme ? 'dark' : null)}
              />
            )}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className={cx(classes.logo, darkTheme ? 'dark' : null)}
          >
            LOGO
          </Typography>
          {auth ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                ml: 'auto',
              }}
            >
              <Button
                variant="contained"
                className={cx(classes.cashButton, darkTheme ? 'dark' : null)}
              >
                Очистити кеш
              </Button>
              <IconButton aria-label="show new notifications" color="inherit">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon className={classes.headerIcon} />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ ml: 1 }}
              >
                <AccountCircle className={classes.headerIcon} />
              </IconButton>

              <Box className={classes.credentials}>
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.75',
                    color: '#232D42',
                  }}
                >
                  Austin Robertson
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 400,
                    fontSize: '13px',
                    lineHeight: '1.3',
                    color: '#8A92A6',
                  }}
                >
                  user@mail.com
                </Typography>
              </Box>
              <IconButton
                aria-label="logout"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClickAuth}
                color="inherit"
              >
                <LogoutIcon className={classes.headerIcon} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </Box>
          ) : (
            <IconButton
              aria-label="logout"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClickAuth}
              color="inherit"
              sx={{
                ml: 'auto',
              }}
            >
              <LoginIcon className={classes.headerIcon} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
