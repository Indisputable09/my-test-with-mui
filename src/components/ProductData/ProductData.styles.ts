import { makeStyles } from 'tss-react/mui';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { CustomPaper } from './SubLinks/Attributes';
import { customTheme } from '../NavBar/NavBar.styles';

export const useProductDataStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    productTitle: {
      fontWeight: 400,
      fontSize: '34px',
      lineHeight: '123.5%',
      marginBottom: '32px',
    },
    panel: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonsBlock: { display: 'flex', gap: '16px' },
    button: { display: 'flex', justifyContent: 'center', height: '34px' },
    linksList: { display: 'flex', columnGap: '32px', flexWrap: 'wrap' },
    linksListItem: {
      width: 'inherit',
    },
    linksListText: {
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '1.7',
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
    publishedText: {
      fontFamily: '"Work Sans", "Roboto", "sans-serif" !important',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '1.15',
      marginTop: '24px',
      color: '#000',
      transition: 'all 250ms ease-out',
      '&.dark': {
        color: '#fff',
      },
    },
    noMarginLabel: {
      fontFamily: '"Work Sans", "Roboto", "sans-serif" !important',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '1.15',
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
    comboBox: {
      width: 440,
      marginTop: '16px',
      [customTheme.breakpoints.down('lg')]: {
        width: '300px',
      },
      [customTheme.breakpoints.down('md')]: {
        width: '150px',
      },
    },
    comboBoxInput: {
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
    attributesDivider: {
      width: '124px',
      margin: '10px 32px 0 32px',
      borderColor: 'rgba(17, 17, 17, 0.25)',
      transition: 'all 250ms ease-out',
      '&.dark': {
        borderColor: 'rgba(255, 255, 255, 0.12)',
      },
    },
    attributesBottomDivider: {
      borderColor: 'rgba(17, 17, 17, 0.25)',
      width: '100%',
      marginBottom: '24px',

      transition: 'all 250ms ease-out',
      '&.dark': {
        borderColor: 'rgba(255, 255, 255, 0.12)',
      },
    },
    deleteAttributeButton: {
      margin: '11px 0 0 32px',
      transition: 'all 250ms ease-out',
      '&.dark': {
        color: '#fff',
      },
      '&:hover, &:focus': {
        color: '#EB5757',
        filter: 'drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.25))',
      },
      '&.dark:hover, &.dark:focus': {
        filter: 'drop-shadow(2px 2px 0px rgba(255, 255, 255, 0.25))',
      },
    },
    addButton: {
      width: '116px',
      marginLeft: 'auto',
      padding: '8px 16px 8px 16px',
      fontSize: '11px',
      backgroundColor: '#3A57E8',
      color: '#fff',
      transition: 'all 250ms ease-out',
      '&:hover, &:focus': { backgroundColor: '#1565C0 !important' },
      '&.dark:hover, &.dark:focus': { backgroundColor: '#90CAF914 !important' },
      '&.dark': {
        backgroundColor: 'transparent',
        border: '1px solid #90CAF9',
        color: '#90CAF9',
      },
    },
    autocomplete: { width: '100%', marginTop: '16px' },
  })
);

export const useBasicPageStyles = makeStyles<void>()(
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
      color: darkTheme ? '#fff' : '#000',
    },
    svg: {
      color: darkTheme ? '#fff' : '#000',
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

interface ICustomPaperProps {
  darkTheme: boolean;
}

export const StyledCustomPaper = styled(CustomPaper, {
  shouldForwardProp: prop =>
    prop !== 'color' &&
    prop !== 'variant' &&
    prop !== 'sx' &&
    prop !== 'darkTheme',
  name: 'SearchField',
  slot: 'Root',
})<ICustomPaperProps>(({ darkTheme }) => {
  return {
    '&': {
      backgroundColor: darkTheme ? '#1F2A38' : '#ffffff',
      color: darkTheme ? '#fff' : '#111111',
    },
    '& p': {
      color: darkTheme ? '#ffffff' : 'inherit',
      margin: 0,
    },
    '& svg': {
      color: darkTheme ? '#ffffff' : 'inherit',
    },
    '& ul::-webkit-scrollbar': {
      width: '5px',
      height: '5px',
    },
    '& ul::-webkit-scrollbar-track': {
      background: darkTheme ? '#24303F' : 'transparent',
    },
    '& ul::-webkit-scrollbar-thumb': {
      background: 'grey',
      '&:hover': { background: 'grey' },
      borderRadius: '100vw',
    },
  };
});
