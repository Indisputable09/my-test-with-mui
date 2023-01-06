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
  useProductDataStyles,
} from '../ProductData.styles';

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

const ComboBox: React.FC<IComboBoxProps> = ({ list, darkTheme }) => {
  // console.log('value', value);
  const { classes, cx } = useProductDataStyles();

  return (
    <Autocomplete
      // id={id}
      // value={value}
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
  setFieldsValues: (obj: any) => void;
  fieldsValues: {
    attributes: any;
  };
}

export const Attributes: React.FC<IAttributesProps> = ({
  darkTheme,
  fieldsValues,
  setFieldsValues,
}) => {
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

  // const handleAutocompleteChange = (
  //   e: any,
  //   newValue: string | null,
  //   index: string
  // ) => {
  //   console.log('index', index);
  //   const id = e.target.id.split('-')[0];
  //   console.log('e.target.id', id);
  //   console.log('newValue', newValue);
  //   setFieldsValues((prevState: any) => {
  //     // console.log('attributes', fieldsValues.attributes[+index]);
  //     const chosenValueToChange = fieldsValues.attributes[index].find(
  //       (item: any) => {
  //         console.log('item.id', item.id);
  //         return item.id === id;
  //       }
  //     );
  //     // const chosenKey = fieldsValues.attributes[+index].find();
  //     console.log('chosenValueToChange', chosenValueToChange);
  //     return {
  //       ...prevState,
  //       attributes: [
  //         {
  //           [fieldsValues.attributes[+index]]: [
  //             { [chosenValueToChange.id]: newValue },
  //             // fieldsValues.attributes[+index].map((item: any) => {
  //             //   if (item.id !== id) {
  //             //     return item;
  //             //   }
  //             //   return { [id]: newValue };
  //             // }),
  //           ],
  //         },
  //       ],
  //       // [fieldsValues.attributes[+index]]: [
  //       //   { [chosenValueToChange.id]: newValue },
  //       //   // fieldsValues.attributes[+index].map((item: any) => {
  //       //   //   if (item.id !== id) {
  //       //   //     return item;
  //       //   //   }
  //       //   //   return { [id]: newValue };
  //       //   // }),
  //       // ],
  //       // [id]: newValue,
  //     };
  //   });
  // };

  const { classes, cx } = useProductDataStyles();

  return (
    <>
      {/* {fieldsValues.attributes.length === 0 ? (
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
        fieldsValues.attributes.map(
          (attribute: { id: string; value?: string }, index: string) => {
            console.log('attribute', attribute);
            console.log('attribute[0]', attribute[0]);
            console.log('attribute[1]', attribute[1]);
            console.log('attribute[2]', attribute[2]!.id);
            return (
              <Box
                key={attribute[0].id}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <InputLabel
                  id="attribute-selection-label"
                  className={cx(classes.label, darkTheme ? 'dark' : null)}
                >
                  Атрибут
                  <Autocomplete
                    id={attribute[1].id}
                    value={attribute[1].value}
                    onChange={(e, newValue) =>
                      handleAutocompleteChange(e, newValue, index)
                    }
                    noOptionsText={<p>Відсутні результати</p>}
                    options={attributes}
                    className={cx(classes.comboBox, darkTheme ? 'dark' : null)}
                    renderInput={params => (
                      <StyledField {...params} darkTheme={darkTheme} />
                    )}
                    PaperComponent={props => {
                      return (
                        <StyledCustomPaper {...props} darkTheme={darkTheme} />
                      );
                    }}
                    ListboxProps={{
                      style: {
                        maxHeight: '150px',
                      },
                    }}
                  />
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
                  <Autocomplete
                    id={attribute[2].id}
                    value={attribute[2].value}
                    onChange={(e, newValue) =>
                      handleAutocompleteChange(e, newValue, index)
                    }
                    noOptionsText={<p>Відсутні результати</p>}
                    options={attributeCategories}
                    className={cx(classes.comboBox, darkTheme ? 'dark' : null)}
                    renderInput={params => (
                      <StyledField {...params} darkTheme={darkTheme} />
                    )}
                    PaperComponent={props => {
                      return (
                        <StyledCustomPaper {...props} darkTheme={darkTheme} />
                      );
                    }}
                    ListboxProps={{
                      style: {
                        maxHeight: '150px',
                      },
                    }}
                  />
                </InputLabel>
                <IconButton
                  className={cx(
                    classes.deleteAttributeButton,
                    darkTheme ? 'dark' : null
                  )}
                  onClick={() => handleDelete(attribute[0].id)}
                  name={attribute[0].id}
                >
                  <Delete sx={{ width: '28px', height: '28px' }} />
                </IconButton>
              </Box>
            );
          }
        )
      )} */}
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
    </>
  );
};
