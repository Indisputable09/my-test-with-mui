import { InputLabel } from '@mui/material';
import React from 'react';
import {
  StyledField,
  useProductCategoryPageStyles,
} from '../ProductCategoryPage.styles';

interface IProductCategorySEOProps {
  darkTheme: boolean;
  setCategoryFieldsValues: (obj: any) => void;
  categoryFieldsValues: {
    metaTitle: string;
    metaDescription: string;
    SEOUrl: string;
  };
}

export const ProductCategorySEO: React.FC<IProductCategorySEOProps> = ({
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
        htmlFor="metaTitle"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Meta title
        <StyledField
          id="metaTitle"
          variant="outlined"
          sx={{ width: '100%', mt: '16px' }}
          required
          darkTheme={darkTheme}
          value={categoryFieldsValues.metaTitle}
          onChange={handleFieldsChange}
        />
      </InputLabel>
      <InputLabel
        htmlFor="metaDescription"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Meta description
        <StyledField
          id="metaDescription"
          variant="outlined"
          sx={{ width: '100%', mt: '16px' }}
          required
          darkTheme={darkTheme}
          value={categoryFieldsValues.metaDescription}
          onChange={handleFieldsChange}
        />
      </InputLabel>
      <InputLabel
        htmlFor="SEOUrl"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        SEO URL
        <StyledField
          id="SEOUrl"
          variant="outlined"
          sx={{ width: '100%', mt: '16px' }}
          required
          darkTheme={darkTheme}
          value={categoryFieldsValues.SEOUrl}
          onChange={handleFieldsChange}
        />
      </InputLabel>
    </>
  );
};
