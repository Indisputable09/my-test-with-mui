import React from 'react';
import { Button, Divider, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useProductCategoryDataStyles } from '../ProductCategoryData.styles';

interface IProductCategoryImagesProps {
  darkTheme: boolean;
  setCategoryFieldsValues: (obj: any) => void;
  categoryFieldsValues: {
    categoryImages: any[];
  };
}

export const ProductCategoryImages: React.FC<IProductCategoryImagesProps> = ({
  darkTheme,
  setCategoryFieldsValues,
  categoryFieldsValues,
}) => {
  const { classes, cx } = useProductCategoryDataStyles();

  const handleAddClick = () => {
    console.log('Відкрити файл менеджер');
  };
  return (
    <>
      {categoryFieldsValues.categoryImages.length === 0 ? (
        <Typography
          component="h2"
          sx={{
            fontFamily: '"Work Sans", "Roboto", "sans-serif" !important',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.15',
            textAlign: 'center',
            mb: 2,
          }}
        >
          Зображення відсутні
        </Typography>
      ) : (
        <p>Якісь зображення</p>
      )}
      <Divider
        className={cx(classes.bottomDivider, darkTheme ? 'dark' : null)}
      />
      <Button
        onClick={handleAddClick}
        variant="contained"
        className={cx(classes.addButton, darkTheme ? 'dark' : null)}
      >
        <AddIcon /> Додати
      </Button>
    </>
  );
};
