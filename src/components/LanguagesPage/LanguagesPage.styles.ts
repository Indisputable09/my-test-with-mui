import { makeStyles } from 'tss-react/mui';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const useLanguagesPageStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    productTitle: { fontSize: '3rem', mb: '20px' },
    panel: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonsBlock: { display: 'flex', gap: '16px' },
    button: { display: 'flex', justifyContent: 'center', height: '34px' },
    divider: {
      marginTop: '16px',
      borderColor: '#111111',
      transition: 'all 250ms ease-out',
      '&.dark': {
        borderColor: '#ffffff',
      },
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '24px',
      color: '#000',
      transition: 'all 250ms ease-out',
      '&.dark': {
        color: '#fff',
      },
    },
    autocomplete: { width: '70%', marginTop: '16px' },
    mainLanguageText: {
      color: '#000',
      transition: 'all 250ms ease-out',
      '&.dark': {
        color: '#fff',
      },
    },
    switch: {
      '&.dark .Mui-checked > .MuiSwitch-thumb': {
        color: '#90CAF9',
      },
      '&.dark .MuiSwitch-track': {
        backgroundColor: '#E0E0E0 !important',
      },
      '&.dark .Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#90CAF9 !important',
      },
    },
  })
);

interface IStyledFieldProps {
  darkTheme: boolean;
}

export const StyledField = styled(TextField, {
  shouldForwardProp: prop =>
    prop !== 'color' &&
    prop !== 'variant' &&
    prop !== 'sx' &&
    prop !== 'darkTheme',
  name: 'SearchField',
  slot: 'Root',
})<IStyledFieldProps>(({ darkTheme }) => {
  return {
    input: {
      color: darkTheme ? '#ffffff' : '#000000',
    },
    svg: {
      color: darkTheme ? '#ffffff' : '#000000',
    },
    textarea: {
      color: darkTheme ? '#ffffff' : '#000000',
    },
    '&.dark label.Mui-focused': {
      color: '#ffffff',
    },
    '&.dark label': {
      color: '#ffffff',
    },
    '&.dark .MuiInput-underline:after': {
      borderBottomColor: '#ffffff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey',
      },
      '&:hover fieldset': {
        borderColor: darkTheme ? '#fff' : '#000',
      },
      '&.Mui-focused fieldset': {
        borderColor: darkTheme ? '#fff' : '#1976d2',
      },
    },
  };
});
