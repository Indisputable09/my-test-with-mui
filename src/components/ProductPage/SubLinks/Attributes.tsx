import React from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  IconButton,
  InputLabel,
  Paper,
  Typography,
} from '@mui/material';
import { nanoid } from 'nanoid';
import Delete from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import {
  StyledCustomPaper,
  StyledField,
  useProductPageStyles,
} from '../ProductPage.styles';

const attributes = [
  'attribute1',
  'attribute2',
  'attribute3',
  'attribute11',
  'attribute12',
  'attribute13',
  'attribute14',
  'attribute15',
  'attribute16',
  'attribute17',
  'attribute18',
  'attribute19',
];
const attributeCategories = [
  'category1',
  'category2',
  'category3',
  'category11',
  'category12',
  'category13',
  'category14',
  'category15',
  'category16',
  'category17',
  'category18',
  'category19',
];

interface IComboBoxProps {
  list: string[];
  darkTheme: boolean;
}

export const CustomPaper: React.FC = props => {
  return <Paper {...props} />;
};

export const ComboBox: React.FC<IComboBoxProps> = ({ list, darkTheme }) => {
  const { classes, cx } = useProductPageStyles();

  return (
    <Autocomplete
      id="combo-box"
      noOptionsText={<p>Відсутні результати</p>}
      options={list}
      className={cx(classes.comboBox, darkTheme ? 'dark' : null)}
      renderInput={params => <StyledField {...params} darkTheme={darkTheme} />}
      PaperComponent={props => {
        return <StyledCustomPaper {...props} darkTheme={darkTheme} />;
      }}
      ListboxProps={{
        style: {
          maxHeight: '150px',
        },
      }}
    />
  );
};

interface IAttributesProps {
  darkTheme: boolean;
}

export const Attributes: React.FC<IAttributesProps> = ({ darkTheme }) => {
  const [attributesCount, setAttributesCount] = React.useState([
    {
      id: nanoid(),
    },
  ]);

  const handleAddClick = () => {
    setAttributesCount(prevState => {
      return [...prevState, { id: nanoid() }];
    });
  };

  const handleDelete = (id: string) => {
    const filteredInputs = attributesCount.filter(item => item.id !== id);
    setAttributesCount(filteredInputs);
  };

  const { classes, cx } = useProductPageStyles();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        py: '24px',
      }}
    >
      {attributesCount.length === 0 ? (
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
          Атрибути відсутні
        </Typography>
      ) : (
        attributesCount.map(item => {
          return (
            <Box key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
              <InputLabel
                id="attribute-selection-label"
                className={cx(classes.label, darkTheme ? 'dark' : null)}
              >
                Атрибут
                <ComboBox list={attributes} darkTheme={darkTheme} />
              </InputLabel>
              <Divider
                className={cx(
                  classes.attributesDivider,
                  darkTheme ? 'dark' : null
                )}
              />
              <InputLabel
                id="attribute-category-selection-label"
                className={cx(classes.label, darkTheme ? 'dark' : null)}
              >
                Значення атрибуту
                <ComboBox list={attributeCategories} darkTheme={darkTheme} />
              </InputLabel>
              <IconButton
                className={cx(
                  classes.deleteAttributeButton,
                  darkTheme ? 'dark' : null
                )}
                onClick={() => handleDelete(item.id)}
                name={item.id}
              >
                <Delete sx={{ width: '28px', height: '28px' }} />
              </IconButton>
            </Box>
          );
        })
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
    </Box>
  );
};
