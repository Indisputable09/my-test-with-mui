import { ListItem } from '@mui/material';
import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

export interface NavBarMenuItemContentProps {
  className?: string;
  link?: string | null; // because the InferProps props allows alows null value
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: any;
}

const NavBarMenuItemContent: React.FC<NavBarMenuItemContentProps> = props => {
  const { className, onClick, link, children } = props;

  // If link is not set return the orinary ListItem
  if (!link || typeof link !== 'string') {
    return (
      <ListItem
        button
        className={className}
        // children={children}
        onClick={onClick}
      >
        {children}
      </ListItem>
    );
  }

  // Return a LitItem with a link component
  return (
    <ListItem
      className={className}
      //   children={children}
      //   button
      component={forwardRef((props: any, ref: any) => (
        <NavLink
          {...props}
          innerRef={ref}
          //   styles={{ cursor: 'pointer' }}
        />
      ))}
      to={link}
    >
      {children}
    </ListItem>
  );
};

export default NavBarMenuItemContent;
