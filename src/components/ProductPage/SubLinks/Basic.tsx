import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import { IconButton, Typography } from '@mui/material';
import { useBasicPageStyles } from '../ProductPage.styles';

export const Basic: React.FC = () => {
  const [alignment, setAlignment] = React.useState<string>('left');

  const handleAlignClick = (side: string) => {
    setAlignment(side);
  };

  const { classes } = useBasicPageStyles();
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
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        sx={{ width: '70%', mb: '24px' }}
      />
      <TextField
        id="sku"
        label="SKU"
        variant="outlined"
        sx={{ width: '70%' }}
      />
      <Typography component="h2" sx={{ fontSize: '2rem', mb: '46px', mt: 2 }}>
        Description
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 80,
          width: '100%',
          px: 2,
          borderRadius: '4px 4px 0 0',
          border: '1px solid rgba(0, 0, 0, 0.23)',
          borderBottom: 'none',
        }}
      >
        <IconButton
          onClick={() => handleAlignClick('left')}
          sx={{
            border: '1px solid rgba(0, 0, 0, 0.23)',
            borderRadius: '4px 0 0 4px',
            color: alignment === 'left' ? '#3A57E8' : 'inherit',
          }}
        >
          <FormatAlignLeftIcon />
        </IconButton>
        <IconButton
          onClick={() => handleAlignClick('center')}
          sx={{
            borderTop: '1px solid rgba(0, 0, 0, 0.23)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
            borderRadius: '0',
            color: alignment === 'center' ? '#3A57E8' : 'inherit',
          }}
        >
          <FormatAlignCenterIcon />
        </IconButton>
        <IconButton
          onClick={() => handleAlignClick('right')}
          sx={{
            border: '1px solid rgba(0, 0, 0, 0.23)',
            borderRadius: '0 4px 4px 0',
            color: alignment === 'right' ? '#3A57E8' : 'inherit',
          }}
        >
          <FormatAlignRightIcon />
        </IconButton>
      </Box>
      <TextField
        InputProps={{
          inputProps: {
            style: { textAlign: alignment as 'start' },
          },
        }}
        className={classes.basicDescriptionField}
        id="description"
        multiline
        maxRows={2}
        sx={{ border: 'none' }}
      />
      <TextField
        id="password"
        label="Current password"
        variant="outlined"
        sx={{ width: '70%', mb: '24px', mt: '32px' }}
      />
      <TextField
        id="currentPassword"
        label="Current password"
        variant="outlined"
        sx={{ width: '70%' }}
      />
    </Box>
  );
};
