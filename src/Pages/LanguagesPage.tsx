import React from 'react';
import { Typography } from '@mui/material';
import CollapsedBreadcrumbs from '../components/Crumbs/Crumbs';
import { useNavBarStyles } from '../components/NavBar/NavBar.styles';
import Table from '../components/Table';
import { languagesRows } from '../TableRows/TableRows';
import { languagesColumns } from '../TableColumns/TableColumns';

interface ILanguagesPageProps {
  darkTheme: boolean;
}

const LanguagesPage: React.FC<ILanguagesPageProps> = ({ darkTheme }) => {
  const { classes, cx } = useNavBarStyles();
  return (
    <>
      <CollapsedBreadcrumbs
        darkTheme={darkTheme}
        linksData={{
          link: '/products/languages',
          pageName: 'Мови',
        }}
      />
      <Typography
        component="h2"
        className={cx(classes.title, darkTheme ? 'dark' : null)}
      >
        Мови
      </Typography>
      <Table
        darkTheme={darkTheme}
        columns={languagesColumns}
        rows={languagesRows}
        page={'languages'}
      />
    </>
  );
};

export default LanguagesPage;
