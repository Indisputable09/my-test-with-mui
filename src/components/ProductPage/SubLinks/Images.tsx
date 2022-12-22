import React from 'react';
import { Button, Divider, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useProductPageStyles } from '../ProductPage.styles';

interface IImageProps {
  darkTheme: boolean;
  setFieldsValues: (obj: any) => void;
  fieldsValues: {
    images: any[];
  };
}

export const Images: React.FC<IImageProps> = ({
  darkTheme,
  setFieldsValues,
  fieldsValues,
}) => {
  const handleAddClick = () => {
    console.log('Відкрити файл менеджер');
  };

  const { classes, cx } = useProductPageStyles();
  return (
    <>
      {fieldsValues.images.length === 0 ? (
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
        className={cx(
          classes.attributesBottomDivider,
          darkTheme ? 'dark' : null
        )}
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
