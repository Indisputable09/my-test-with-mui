import React from 'react';
import Box from '@mui/material/Box';
import { CKEditor } from 'ckeditor4-react';
import { InputLabel, Typography } from '@mui/material';
import { StyledField, useProductPageStyles } from '../ProductPage.styles';

interface IBasicProps {
  darkTheme: boolean;
}

export const Basic: React.FC<IBasicProps> = ({ darkTheme }) => {
  const { classes, cx } = useProductPageStyles();
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        py: '24px',
      }}
      noValidate
      autoComplete="off"
    >
      <InputLabel
        htmlFor="name"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        <div>
          Назва товару<span style={{ color: 'red', fontSize: '20px' }}>*</span>
        </div>
        <StyledField
          id="name"
          variant="outlined"
          sx={{ width: '70%', mt: '16px' }}
          required
          darkTheme={darkTheme}
        />
      </InputLabel>
      <InputLabel
        htmlFor="sku"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Артикул
        <StyledField
          id="sku"
          variant="outlined"
          sx={{ width: '70%', mt: '16px' }}
          darkTheme={darkTheme}
        />
      </InputLabel>
      <Typography component="h2" sx={{ mb: '24px', mt: 2 }}>
        Опис
      </Typography>
      <CKEditor />
    </Box>
  );
};
