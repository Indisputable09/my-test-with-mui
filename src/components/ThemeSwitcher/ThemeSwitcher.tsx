import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ThemeSwithcerStyled } from './ThemeSwitcher.styled';

interface IThemeSwitcherProps {
  smallNavbar?: boolean;
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({
  smallNavbar = false,
}) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      sx={{ mt: 'auto', mr: 'auto', ml: smallNavbar ? '-11px' : 'auto' }}
      control={
        <ThemeSwithcerStyled
          sx={{ m: 1 }}
          checked={checked}
          onChange={handleChange}
        />
      }
      label=""
    />
  );
};

export default ThemeSwitcher;
