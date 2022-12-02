import { Button } from '@mui/material';
import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { rows } from './components/TableComponent/TableData';

export const App: React.FC = () => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const [mockProductId, setMockProductId] = React.useState<null | number>(null);

  // const mockProductId = null;

  const toggleDrawer = (open: boolean) => {
    setOpenDrawer(open);
  };
  return (
    <>
      <Header toggleDrawer={toggleDrawer} openDrawer={openDrawer} />

      <Button
        onClick={() => setMockProductId(2)}
        sx={{ position: 'absolute', right: 0 }}
      >
        Це типу лінк на продукт
      </Button>
      <NavBar openDrawer={openDrawer} productId={mockProductId} rows={rows} />
    </>
  );
};
