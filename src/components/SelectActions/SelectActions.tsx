import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography } from '@mui/material';

const SelectActions: React.FC = () => {
  const [action, setAction] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAction(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="action-select-label">Action</InputLabel>
        <Select
          labelId="action-select-label"
          id="action-select"
          value={action}
          onChange={handleChange}
          autoWidth
          label="Action"
        >
          <MenuItem value="">
            <em>Відмінити</em>
          </MenuItem>
          <MenuItem value="активувати">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <IconButton
                sx={{ display: 'flex', justifyContent: 'center' }}
                size="small"
                edge="start"
                color="inherit"
                aria-label="delete"
              >
                <ToggleOnIcon />
              </IconButton>
              <Typography variant="h6" component="p" fontSize={15}>
                Активувати вибір
              </Typography>
            </Box>
          </MenuItem>
          <MenuItem value="деактивувати">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <IconButton
                sx={{ display: 'flex', justifyContent: 'center' }}
                size="small"
                edge="start"
                color="inherit"
                aria-label="delete"
              >
                <ToggleOffIcon />
              </IconButton>
              <Typography variant="h6" component="p" fontSize={15}>
                Деактивувати вибір
              </Typography>
            </Box>
          </MenuItem>
          <MenuItem value="копіювати">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <IconButton
                sx={{ display: 'flex', justifyContent: 'center' }}
                size="small"
                edge="start"
                color="inherit"
                aria-label="delete"
              >
                <ContentCopyIcon />
              </IconButton>
              <Typography variant="h6" component="p" fontSize={15}>
                Копіювати
              </Typography>
            </Box>
          </MenuItem>
          <MenuItem value="видалити">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <IconButton
                sx={{ display: 'flex', justifyContent: 'center' }}
                size="small"
                edge="start"
                color="inherit"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
              <Typography variant="h6" component="p" fontSize={15}>
                Видалити
              </Typography>
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectActions;
