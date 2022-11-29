import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';

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
