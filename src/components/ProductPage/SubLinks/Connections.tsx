import React from 'react';
import { Box, Divider, IconButton, InputLabel, TextField } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import CancelIcon from '@mui/icons-material/Cancel';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
}

const MultipleSelectChip: React.FC<IMultipleSelectChipProps> = ({ list }) => {
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
          renderValue={selected => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              <IconButton
                onClick={handleDeleteAll}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: '5%',
                  transform: 'translateY(-50%)',
                }}
              >
                <CancelIcon onMouseDown={event => event.stopPropagation()} />
              </IconButton>
              {selected.map(value => (
                <Chip
                  key={value}
                  label={value}
                  deleteIcon={
                    <CancelIcon
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
          MenuProps={MenuProps}
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

export const Connections: React.FC = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: '32px',
      }}
      noValidate
      autoComplete="off"
    >
      <InputLabel
        htmlFor="manufactured"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mb: '24px',
          color: '#000',
        }}
      >
        Manufactured
        <TextField
          id="manufactured"
          variant="outlined"
          sx={{ width: '70%', mt: '16px' }}
        />
      </InputLabel>
      <InputLabel
        htmlFor="mainCategory"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mb: '24px',
          color: '#000',
        }}
      >
        Main category
        <MultipleSelectChip list={names} />
      </InputLabel>
      <InputLabel
        htmlFor="showInCategories"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          color: '#000',
        }}
      >
        Show in categories
        <MultipleSelectChip list={categories} />
      </InputLabel>
      <Divider sx={{ my: '24px', borderColor: 'black' }} />
      <InputLabel
        htmlFor="relatedProducts"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mb: '24px',
          color: '#000',
        }}
      >
        Related products
        <MultipleSelectChip list={relatedProducts} />
      </InputLabel>
      <InputLabel
        htmlFor="featuredProducts"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          color: '#000',
        }}
      >
        Featured products
        <MultipleSelectChip list={featuredProducts} />
      </InputLabel>
    </Box>
  );
};
