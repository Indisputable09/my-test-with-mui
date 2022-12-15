import React from 'react';
import Box from '@mui/material/Box';
import { InputLabel } from '@mui/material';
import { StyledField, useFAQPageStyles } from '../FAQPage.styles';

interface IBasicFAQProps {
  darkTheme: boolean;
}

export const BasicFAQ: React.FC<IBasicFAQProps> = ({ darkTheme }) => {
  const { classes, cx } = useFAQPageStyles();

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        py: '24px',
      }}
      noValidate
      autoComplete="off"
    >
      <InputLabel
        htmlFor="question"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        <div>Питання</div>
        <StyledField
          id="question"
          variant="outlined"
          sx={{ width: '100%', mt: '16px' }}
          required
          darkTheme={darkTheme}
        />
      </InputLabel>
      <InputLabel
        htmlFor="answer"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Відповідь
        <StyledField
          id="answer"
          variant="outlined"
          sx={{ width: '100%', mt: '16px' }}
          darkTheme={darkTheme}
          multiline
          rows={10}
        />
      </InputLabel>
    </Box>
  );
};
