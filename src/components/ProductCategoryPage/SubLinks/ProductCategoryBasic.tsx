import { InputLabel, Typography } from '@mui/material';
import { CKEditor } from 'ckeditor4-react';
import React from 'react';
import {
  StyledField,
  useProductCategoryPageStyles,
} from '../ProductCategoryPage.styles';

interface IProductCategoryBasicProps {
  darkTheme: boolean;
  setCategoryFieldsValues: (obj: any) => void;
  categoryFieldsValues: {
    categoryName: string;
    categoryDescription: string;
  };
}

export const ProductCategoryBasic: React.FC<IProductCategoryBasicProps> = ({
  darkTheme,
  setCategoryFieldsValues,
  categoryFieldsValues,
}) => {
  const { classes, cx } = useProductCategoryPageStyles();

  const handleFieldsChange = (e: React.ChangeEvent) => {
    setCategoryFieldsValues((prevState: any) => {
      return {
        ...prevState,
        [e.target.id]: (e.target as HTMLInputElement).value,
      };
    });
  };

  return (
    <>
      <InputLabel
        htmlFor="categoryName"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        <div>
          Назва категорії
          <span style={{ color: 'red', fontSize: '20px' }}>*</span>
        </div>
        <StyledField
          id="categoryName"
          variant="outlined"
          sx={{ width: '100%', mt: '16px' }}
          required
          darkTheme={darkTheme}
          value={categoryFieldsValues.categoryName}
          onChange={handleFieldsChange}
        />
      </InputLabel>
      <Typography
        component="h2"
        sx={{
          mb: '24px',
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
        initData={categoryFieldsValues.categoryDescription}
        onChange={(e: any) => {
          setCategoryFieldsValues((prevState: any) => {
            return {
              ...prevState,
              categoryDescription: e.editor.getData(),
            };
          });
        }}
      />
    </>
  );
};
