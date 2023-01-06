import React from 'react';
import { Typography } from '@mui/material';
// import CollapsedBreadcrumbs from '../components/Crumbs/Crumbs';
import { useNavBarStyles } from '../components/NavBar/NavBar.styles';
import Table from '../components/Table';
import { manufacturersColumns } from '../TableColumns/TableColumns';
import { manufacturersRows } from '../TableRows/TableRows';

interface IManufacturersPageProps {
  darkTheme: boolean;
}

const ManufacturersPage: React.FC<IManufacturersPageProps> = ({
  darkTheme,
}) => {
  const { classes, cx } = useNavBarStyles();
  return (
    <>
      {/* <CollapsedBreadcrumbs darkTheme={darkTheme} /> */}
      <Typography
        component="h2"
        className={cx(classes.title, darkTheme ? 'dark' : null)}
      >
        Виробники
      </Typography>
      <Table
        darkTheme={darkTheme}
        columns={manufacturersColumns}
        rows={manufacturersRows}
        page={'manufactures'}
      />
    </>
  );
};

export default ManufacturersPage;
