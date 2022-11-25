import React from 'react';
import Header from './Header';
// import NavBar from './NavBar';
import NavBar from './NavBar';

export const App: React.FC = () => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);

  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };
  return (
    <>
      <Header toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
      <NavBar openDrawer={openDrawer} />
    </>
  );
};
