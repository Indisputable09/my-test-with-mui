import { makeStyles } from 'tss-react/mui';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const useProductCategoryPageStyles = makeStyles<void>()(
  (theme, _params, classes) => ({
    panel: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    productTitle: {
      fontWeight: 400,
      fontSize: '34px',
      lineHeight: '123.5%',
      marginBottom: '32px',
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
    divider: {
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
    publishedText: {
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
    bottomDivider: {
      borderColor: 'rgba(17, 17, 17, 0.25)',
      width: '100%',
      marginBottom: '24px',

      transition: 'all 250ms ease-out',
      '&.dark': {
        borderColor: 'rgba(255, 255, 255, 0.12)',
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
      '&:hover, &:focus': { backgroundColor: '#90CAF914 !important' },
      '&.dark': {
        backgroundColor: 'transparent',
        border: '1px solid #90CAF9',
        color: '#90CAF9',
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
