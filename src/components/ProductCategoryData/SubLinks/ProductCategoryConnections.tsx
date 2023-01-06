import {
  Autocomplete,
  Box,
  InputLabel,
  Switch,
  Typography,
} from '@mui/material';
import React from 'react';
import { StyledCustomPaper } from '../../ProductData/ProductData.styles';
import {
  StyledField,
  useProductCategoryDataStyles,
} from '../ProductCategoryData.styles';

interface IProductCategoryConnectionsProps {
  darkTheme: boolean;
  setCategoryFieldsValues: (obj: any) => void;
  categoryFieldsValues: {
    parentCategory: string | null;
    sortOrder: number;
    publishedCategory: boolean;
  };
}

const list = [
  'category1',
  'category2',
  'category3',
  'category11',
  'category12',
  'category13',
];

export const ProductCategoryConnections: React.FC<
  IProductCategoryConnectionsProps
> = ({ darkTheme, categoryFieldsValues, setCategoryFieldsValues }) => {
  const { classes, cx } = useProductCategoryDataStyles();

  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryFieldsValues((prevState: any) => {
      return {
        ...prevState,
        [e.target.id]: Number((e.target as HTMLInputElement).value),
      };
    });
  };

  const handlePublishedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryFieldsValues((prevState: any) => {
      return {
        ...prevState,
        publishedCategory: (e.target as HTMLInputElement).checked,
      };
    });
  };

  return (
    <>
      <InputLabel
        htmlFor="parentCategory"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Виробник
        <Autocomplete
          id="parentCategory"
          onChange={(e: any, newValue: string | null) => {
            setCategoryFieldsValues((prevState: any) => {
              return {
                ...prevState,
                parentCategory: newValue,
              };
            });
          }}
          value={categoryFieldsValues.parentCategory}
          noOptionsText={<p>Відсутні результати</p>}
          options={list}
          className={cx(classes.autocomplete, darkTheme ? 'dark' : null)}
          renderInput={params => (
            <StyledField {...params} darkTheme={darkTheme} />
          )}
          PaperComponent={props => {
            return <StyledCustomPaper {...props} darkTheme={darkTheme} />;
          }}
          ListboxProps={{
            style: {
              maxHeight: '150px',
            },
          }}
        />
      </InputLabel>
      <InputLabel
        htmlFor="sortOrder"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Сортування
        <StyledField
          type="number"
          id="sortOrder"
          variant="outlined"
          sx={{ width: '10%', mt: '16px' }}
          darkTheme={darkTheme}
          onChange={handleInputsChange}
          value={categoryFieldsValues.sortOrder}
        />
      </InputLabel>
      <Box sx={{ mb: '24px' }}>
        <Typography
          component="p"
          className={cx(classes.publishedText, darkTheme ? 'dark' : null)}
        >
          Опубліковано
        </Typography>
        <Switch
          checked={categoryFieldsValues.publishedCategory}
          onChange={handlePublishedChange}
          inputProps={{ 'aria-label': 'published' }}
          className={cx(classes.switch, darkTheme ? 'dark' : null)}
        />
      </Box>
    </>
  );
};
