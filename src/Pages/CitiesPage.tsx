import React from 'react';
import { Typography } from '@mui/material';
import CollapsedBreadcrumbs from '../components/Crumbs/Crumbs';
import { useNavBarStyles } from '../components/NavBar/NavBar.styles';
import TableComponent from '../components/TableComponent';
import { citiesColumns } from '../TableColumns/TableColumns';
import { citiesRows } from '../TableRows/TableRows';

interface ICitiesPageProps {
  darkTheme: boolean;
}

const CitiesPage: React.FC<ICitiesPageProps> = ({ darkTheme }) => {
  const { classes, cx } = useNavBarStyles();
  return (
    <>
      <CollapsedBreadcrumbs darkTheme={darkTheme} />
      <Typography
        component="h2"
        className={cx(classes.title, darkTheme ? 'dark' : null)}
      >
        Міста
      </Typography>
      <TableComponent
        darkTheme={darkTheme}
        columns={citiesColumns}
        rows={citiesRows}
        page={'cities'}
      />
    </>
  );
};

export default CitiesPage;
