import { makeStyles } from 'tss-react/mui';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const useFAQDataStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    productTitle: { fontSize: '3rem', mb: '20px' },
    panel: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonsBlock: { display: 'flex', gap: '16px' },
    button: { display: 'flex', justifyContent: 'center', height: '34px' },
    linksList: { display: 'flex', gap: '32px' },
    linksListItem: { width: 'inherit' },
    linksListText: {
      fontSize: '15px',
      '&.active': {
        color: ' #1976D2',
        '&:after': {
          content: `''`,
          width: '100%',
          position: 'absolute',
          left: 0,
          top: 'calc(100% + 6px)',
          borderBottom: '2px solid #1976D2',
        },
        '&.dark': {
          color: '#90CAF9',
          '&:after': {
            borderBottom: '2px solid #90CAF9',
          },
        },
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
    radioButtonsLabel: {
      fontFamily: '"Work Sans", "Roboto", "sans-serif" !important',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '1.15',
      color: '#000',
      marginBottom: '16px',
      transition: 'all 250ms ease-out',
      '&.dark': {
        color: '#fff',
      },
    },
    noMarginLabel: {
      display: 'flex',
      flexDirection: 'column',
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
    radioButton: {
      transition: 'all 250ms ease-out',
      '&.dark': {
        color: '#90CAF9',
      },
    },
    datePickerField: {
      transition: 'all 250ms ease-out',
      '&.dark svg': {
        color: '#fff',
      },
    },
    divider: {
      borderColor: 'rgba(17, 17, 17, 0.25)',
      transition: 'all 250ms ease-out',
      '&.dark': {
        borderColor: 'rgba(255, 255, 255, 0.12)',
      },
    },
    selectInput: {
      '&.dark': {
        color: '#fff',
      },
      transition: 'all 250ms ease-out',
      '&.dark > svg': {
        color: '#fff',
        transition: 'all 250ms ease-out',
      },
      '& > svg': {
        color: 'inherit',
        transition: 'all 250ms ease-out',
      },
      '& > fieldset': {
        borderColor: 'grey',
        transition: 'all 250ms ease-out',
      },
      '&.dark:hover > fieldset': {
        borderColor: 'white',
        transition: 'all 250ms ease-out',
      },
      '&.dark.Mui-focused fieldset': {
        borderColor: '#fff',
      },
    },
    selectMenu: {
      '&.dark ul': {
        backgroundColor: '#1F2A38',
        color: '#fff',
      },
      '&::-webkit-scrollbar': {
        width: '5px',
        height: '5px',
      },
      '&::-webkit-scrollbar-track': {
        background: '#24303F',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'grey',
        '&:hover': { background: 'grey' },
        borderRadius: '100vw',
      },
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
    },
    cancelAllChipsButton: {
      position: 'absolute',
      top: '50%',
      right: '5%',
      transform: 'translateY(-50%)',
      transition: 'all 250ms ease-out',
      '&.dark': {
        color: '#fff',
      },
    },
    cancelChipIcon: {
      transition: 'all 250ms ease-out',
      '&.dark': {
        color: '#ffffff',
      },
    },
    chip: {
      transition: 'all 250ms ease-out',
      '&.dark': {
        backgroundColor: 'grey',
        color: '#ffffff',
      },
    },
  })
);

export const useBasicFAQPageStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    basicDescriptionField: {
      [`& fieldset`]: {
        borderRadius: '0 0 4px 4px',
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
