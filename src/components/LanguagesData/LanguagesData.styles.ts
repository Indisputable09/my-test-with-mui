import { makeStyles } from 'tss-react/mui';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const useLanguagesDataStyles = makeStyles<void>()(
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
      borderColor: 'rgba(17, 17, 17, 0.25)',
      transition: 'all 250ms ease-out',
      '&.dark': {
        borderColor: 'rgba(255, 255, 255, 0.12)',
      },
    },
    label: {
      fontFamily: '"Work Sans", "Roboto", "sans-serif" !important',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '1.15',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '24px',
      color: '#000',
      transition: 'all 250ms ease-out',
      '&.dark': {
        color: '#fff',
      },
    },
    autocomplete: { width: '100%', marginTop: '16px' },
    mainLanguageText: {
      fontFamily: '"Work Sans", "Roboto", "sans-serif" !important',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '1.15',
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
