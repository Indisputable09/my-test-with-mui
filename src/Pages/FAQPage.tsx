import React from 'react';
import { Typography } from '@mui/material';
import CollapsedBreadcrumbs from '../components/Crumbs/Crumbs';
import { useNavBarStyles } from '../components/NavBar/NavBar.styles';
import Table from '../components/Table';
import { FAQRows } from '../TableRows/TableRows';
import { FAQColumns } from '../TableColumns/TableColumns';

interface IFAQPageProps {
  darkTheme: boolean;
}

const FAQPage: React.FC<IFAQPageProps> = ({ darkTheme }) => {
  const { classes, cx } = useNavBarStyles();
  return (
    <>
      <CollapsedBreadcrumbs
        darkTheme={darkTheme}
        linksData={{
          link: '/products/FAQ',
          pageName: 'FAQ`s',
        }}
      />
      <Typography
        component="h2"
        className={cx(classes.title, darkTheme ? 'dark' : null)}
      >
        FAQ`s
      </Typography>
      <Table
        darkTheme={darkTheme}
        columns={FAQColumns}
        rows={FAQRows}
        page={'FAQ'}
      />
    </>
  );
};

export default FAQPage;
