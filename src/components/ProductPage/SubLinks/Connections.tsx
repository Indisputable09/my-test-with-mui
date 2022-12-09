import React from 'react';
import { Box, Divider, IconButton, InputLabel } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import CancelIcon from '@mui/icons-material/Cancel';
import { StyledField, useProductPageStyles } from '../ProductPage.styles';

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
}

const MultipleSelectChip: React.FC<IMultipleSelectChipProps> = ({
  list,
  darkTheme,
}) => {
  const theme = useTheme();
  const [selectedListItems, setSelectedListItems] = React.useState<string[]>(
    []
  );

  const handleChange = (event: SelectChangeEvent<typeof selectedListItems>) => {
    const {
      target: { value },
    } = event;
    setSelectedListItems(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleDelete = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    setSelectedListItems(prevState => prevState.filter(item => item !== value));
  };

  const handleDeleteAll = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedListItems([]);
  };

  const { classes, cx } = useProductPageStyles();

  return (
    <div>
      <FormControl sx={{ width: '70%' }}>
        <Select
          sx={{ mt: '16px' }}
          id="multiple-chip"
          multiple
          value={selectedListItems}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" />}
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
}

export const Connections: React.FC<IConnectionsProps> = ({ darkTheme }) => {
  const { classes, cx } = useProductPageStyles();

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        pt: '24px',
        pb: '48px',
      }}
      noValidate
      autoComplete="off"
    >
      <InputLabel
        htmlFor="manufactured"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Виробник
        <StyledField
          id="manufactured"
          variant="outlined"
          sx={{ width: '70%', mt: '16px' }}
          darkTheme={darkTheme}
        />
      </InputLabel>
      <InputLabel
        htmlFor="mainCategory"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        <div>
          Категорія<span style={{ color: 'red', fontSize: '20px' }}>*</span>
        </div>
        <MultipleSelectChip
          darkTheme={darkTheme}
          list={names}
          // input={<StyledField label="Name" />}
          // className={cx(classes.selectInput, darkTheme ? 'dark' : null)}
          // MenuProps={{
          //   classes: {
          //     paper: cx(classes.selectMenu, darkTheme ? 'dark' : null),
          //   },
          // }}
        />
      </InputLabel>
      <InputLabel
        htmlFor="showInCategories"
        className={cx(classes.noMarginLabel, darkTheme ? 'dark' : null)}
      >
        Показувати в категоріях
        <MultipleSelectChip
          darkTheme={darkTheme}
          list={categories}
          // className={cx(classes.selectInput, darkTheme ? 'dark' : null)}
          // MenuProps={{
          //   classes: {
          //     paper: cx(classes.selectMenu, darkTheme ? 'dark' : null),
          //   },
          // }}
        />
      </InputLabel>
      <Divider className={cx(classes.divider, darkTheme ? 'dark' : null)} />
      <InputLabel
        htmlFor="relatedProducts"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Схожі товари
        <MultipleSelectChip list={relatedProducts} darkTheme={darkTheme} />
      </InputLabel>
      <InputLabel
        htmlFor="featuredProducts"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Рекламні товари
        <MultipleSelectChip list={featuredProducts} darkTheme={darkTheme} />
      </InputLabel>
    </Box>
  );
};
