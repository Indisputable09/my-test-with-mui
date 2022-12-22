import React from 'react';
import { CKEditor } from 'ckeditor4-react';
import { InputLabel, Typography } from '@mui/material';
import { StyledField, useProductPageStyles } from '../ProductPage.styles';

interface IBasicProps {
  darkTheme: boolean;
  setFieldsValues: (obj: any) => void;
  fieldsValues: {
    name: string;
    sku: string;
    description: string;
  };
}

export const Basic: React.FC<IBasicProps> = ({
  darkTheme,
  setFieldsValues,
  fieldsValues,
}) => {
  const { classes, cx } = useProductPageStyles();

  const handleFieldsChange = (e: React.ChangeEvent) => {
    setFieldsValues((prevState: any) => {
      return {
        ...prevState,
        [e.target.id]: (e.target as HTMLInputElement).value,
      };
    });
  };

  return (
    <>
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
          sx={{ width: '100%', mt: '16px' }}
          required
          darkTheme={darkTheme}
          value={fieldsValues.name}
          onChange={handleFieldsChange}
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
          sx={{ width: '100%', mt: '16px' }}
          darkTheme={darkTheme}
          value={fieldsValues.sku}
          onChange={handleFieldsChange}
        />
      </InputLabel>
      <Typography
        component="h2"
        sx={{
          mb: '24px',
          mt: 2,
          fontFamily: '"Work Sans", "Roboto", "sans-serif" !important',
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '1.15',
        }}
      >
        Опис
      </Typography>
      <CKEditor
        debug={false}
        initData={fieldsValues.description}
        onChange={(e: any) => {
          setFieldsValues((prevState: any) => {
            return {
              ...prevState,
              description: e.editor.getData(),
            };
          });
        }}
      />
    </>
  );
};
