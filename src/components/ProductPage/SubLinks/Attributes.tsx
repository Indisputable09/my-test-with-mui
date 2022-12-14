import React from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  IconButton,
  InputLabel,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { nanoid } from 'nanoid';
import Delete from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { StyledField, useProductPageStyles } from '../ProductPage.styles';

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

interface ICustomPaperProps {
  darkTheme: boolean;
}

const CustomPaper: React.FC = props => {
  return <Paper {...props} />;
};

const StyledCustomPaper = styled(CustomPaper, {
  shouldForwardProp: prop =>
    prop !== 'color' &&
    prop !== 'variant' &&
    prop !== 'sx' &&
    prop !== 'darkTheme',
  name: 'SearchField',
  slot: 'Root',
})<ICustomPaperProps>(({ darkTheme }) => {
  return {
    '&': {
      backgroundColor: darkTheme ? '#1F2A38' : '#ffffff',
      color: darkTheme ? '#fff' : '#111111',
    },
    '& ul::-webkit-scrollbar': {
      width: '5px',
      height: '5px',
    },
    '& ul::-webkit-scrollbar-track': {
      background: darkTheme ? '#24303F' : 'transparent',
    },
    '& ul::-webkit-scrollbar-thumb': {
      background: 'grey',
      '&:hover': { background: 'grey' },
      borderRadius: '100vw',
    },
  };
});

const ComboBox: React.FC<IComboBoxProps> = ({ list, darkTheme }) => {
  const { classes, cx } = useProductPageStyles();

  return (
    <Autocomplete
      id="combo-box"
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
  // const [attributesCount, setAttributesCount] = React.useState<number>(1);
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
      {attributesCount.map(item => {
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
      })}
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
    </Box>
  );
};
