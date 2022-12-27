import React from 'react';
import { Autocomplete, Box, IconButton, InputLabel } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  StyledCustomPaper,
  StyledField,
  useProductPageStyles,
} from '../ProductPage.styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const categories = ['category1', 'category2', 'category3'];
const relatedProducts = ['category11', 'category12', 'category13'];
const featuredProducts = [
  'category1',
  'category2',
  'category3',
  'category11',
  'category12',
  'category13',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface IMultipleSelectChipProps {
  list: string[];
  darkTheme: boolean;
  id: string;
  handleMultipleSelectChange: (id: string, newValue: Array<string>) => void;
  value: string[];
}

export const MultipleSelectChip: React.FC<IMultipleSelectChipProps> = ({
  list,
  darkTheme,
  id,
  handleMultipleSelectChange,
  value,
}) => {
  const theme = useTheme();
  const [selectedListItems, setSelectedListItems] = React.useState<string[]>(
    []
  );

  const handleChange = (event: SelectChangeEvent<typeof selectedListItems>) => {
    const {
      target: { value },
    } = event;
    handleMultipleSelectChange(id, value as string[]);
  };

  const handleDelete = (e: React.MouseEvent, itemToDelete: string) => {
    e.preventDefault();
    const remainingItems = value.filter(item => item !== itemToDelete);
    handleMultipleSelectChange(id, remainingItems);
  };

  const handleDeleteAll = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedListItems([]);
    handleMultipleSelectChange(id, []);
  };

  const { classes, cx } = useProductPageStyles();

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <Select
          sx={{ mt: '16px' }}
          id="multiple-chip"
          multiple
          // value={selectedListItems}
          value={value}
          onChange={handleChange}
          input={<OutlinedInput id={id} />}
          className={cx(classes.selectInput, darkTheme ? 'dark' : null)}
          renderValue={selected => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              <IconButton
                onClick={handleDeleteAll}
                className={cx(
                  classes.cancelAllChipsButton,
                  darkTheme ? 'dark' : null
                )}
              >
                <CancelIcon onMouseDown={event => event.stopPropagation()} />
              </IconButton>
              {selected.map(value => (
                <Chip
                  key={value}
                  label={value}
                  className={cx(classes.chip, darkTheme ? 'dark' : null)}
                  deleteIcon={
                    <CancelIcon
                      className={cx(
                        classes.cancelChipIcon,
                        darkTheme ? 'dark' : null
                      )}
                      onMouseDown={event => event.stopPropagation()}
                    />
                  }
                  onDelete={e => {
                    handleDelete(e, value);
                  }}
                />
              ))}
            </Box>
          )}
          MenuProps={{
            classes: {
              paper: cx(classes.selectMenu, darkTheme ? 'dark' : null),
            },
            PaperProps: {
              style: {
                maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
                width: 250,
              },
            },
          }}
        >
          {list.map(item => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(item, selectedListItems, theme)}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

interface IConnectionsProps {
  darkTheme: boolean;
  setFieldsValues: (obj: any) => void;
  fieldsValues: {
    producer: string | null;
    category: string | null;
    showInCategories: string[];
    relatedProducts: string[];
    featuredProducts: string[];
  };
}

export const Connections: React.FC<IConnectionsProps> = ({
  darkTheme,
  setFieldsValues,
  fieldsValues,
}) => {
  const { classes, cx } = useProductPageStyles();

  const handleMultipleSelectChange = (id: string, newValue: string[]) => {
    setFieldsValues((prevState: any) => {
      return {
        ...prevState,
        [id]: newValue,
      };
    });
  };

  return (
    <>
      <InputLabel
        htmlFor="producer"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Виробник
        <Autocomplete
          id="producer"
          onChange={(e: any, newValue: string | null) => {
            setFieldsValues((prevState: any) => {
              return {
                ...prevState,
                producer: newValue,
              };
            });
          }}
          value={fieldsValues.producer}
          noOptionsText={<p>Відсутні результати</p>}
          options={names}
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
        htmlFor="category"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        <div>
          Категорія<span style={{ color: 'red', fontSize: '20px' }}>*</span>
        </div>
        <Autocomplete
          id="category"
          value={fieldsValues.category}
          onChange={(e: any, newValue: string | null) => {
            setFieldsValues((prevState: any) => {
              return {
                ...prevState,
                category: newValue,
              };
            });
          }}
          noOptionsText={<p>Відсутні результати</p>}
          options={names}
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
        htmlFor="showInCategories"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Показувати в категоріях
        <MultipleSelectChip
          darkTheme={darkTheme}
          list={categories}
          id="showInCategories"
          handleMultipleSelectChange={handleMultipleSelectChange}
          value={fieldsValues.showInCategories}
        />
      </InputLabel>
      <InputLabel
        htmlFor="relatedProducts"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Схожі товари
        <MultipleSelectChip
          list={relatedProducts}
          darkTheme={darkTheme}
          id="relatedProducts"
          handleMultipleSelectChange={handleMultipleSelectChange}
          value={fieldsValues.relatedProducts}
        />
      </InputLabel>
      <InputLabel
        htmlFor="featuredProducts"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Рекламні товари
        <MultipleSelectChip
          list={featuredProducts}
          darkTheme={darkTheme}
          id="featuredProducts"
          handleMultipleSelectChange={handleMultipleSelectChange}
          value={fieldsValues.featuredProducts}
        />
      </InputLabel>
    </>
  );
};
