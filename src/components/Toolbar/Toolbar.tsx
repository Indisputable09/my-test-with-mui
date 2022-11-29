import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { IRow } from '../TableComponent/TableComponent';

interface IToolbarProps {
  handleChangeFilter: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  filter: string;
  selectedRows: IRow[];
}

const Toolbar: React.FC<IToolbarProps> = ({
  handleChangeFilter,
  filter,
  selectedRows,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80,
        width: '100%',
        backgroundColor: '#fff',
        mb: 2,
        px: 2,
        borderRadius: '10px',
      }}
    >
      <TextField
        id="search"
        label="Пошук..."
        variant="outlined"
        value={filter}
        onChange={e => handleChangeFilter(e)}
        autoComplete="off"
      />

      <Button
        variant="contained"
        sx={{
          py: 1,
          px: 2,
          fontSize: '11px',
          backgroundColor: '#3A57E8',
          color: '#fff',
        }}
      >
        {selectedRows.length > 0 ? (
          <DeleteIcon />
        ) : (
          <>
            <AddIcon /> Додати
          </>
        )}
      </Button>
    </Box>
  );
};

export default Toolbar;
