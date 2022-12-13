import React from 'react';
import { Box, InputLabel } from '@mui/material';
import { MultipleSelectChip } from '../../ProductPage/SubLinks/Connections';
import { useFAQPageStyles } from '../FAQPage.styles';

interface IConnectionsFAQProps {
  darkTheme: boolean;
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export const ConnectionsFAQ: React.FC<IConnectionsFAQProps> = ({
  darkTheme,
}) => {
  const { classes, cx } = useFAQPageStyles();
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        pt: '24px',
        pb: '48px',
      }}
      noValidate
      autoComplete="off"
    >
      <InputLabel
        htmlFor="page"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Сторінка
        <MultipleSelectChip darkTheme={darkTheme} list={names} />
      </InputLabel>
    </Box>
  );
};
