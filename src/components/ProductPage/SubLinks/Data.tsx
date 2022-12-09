import React from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  styled,
  Switch,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/uk';
import { StyledField, useProductPageStyles } from '../ProductPage.styles';

interface IViewsDatePickerProps {
  darkTheme: boolean;
}

const ViewsDatePicker: React.FC<IViewsDatePickerProps> = ({ darkTheme }) => {
  const [value, setValue] = React.useState<Date | Dayjs | null>(
    dayjs('2022-04-07')
  );

  const { classes, cx } = useProductPageStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'uk'}>
      <Stack spacing={3}>
        <DatePicker
          maxDate={new Date()}
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={params => (
            <InputLabel
              className={cx(classes.noMarginLabel, darkTheme ? 'dark' : null)}
            >
              Дата публікації
              <StyledField
                {...params}
                helperText={null}
                sx={{ width: '40%', mt: '16px' }}
                darkTheme={darkTheme}
                className={cx(
                  classes.datePickerField,
                  darkTheme ? 'dark' : null
                )}
              />
            </InputLabel>
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
};

const CustomizedTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#1976d2',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#1976d2',
  },
}));

interface IDataProps {
  darkTheme: boolean;
}

export const Data: React.FC<IDataProps> = ({ darkTheme }) => {
  const [minQuantity, setMinQuantity] = React.useState<number>(0);
  const [radioValue, setRadioValue] = React.useState<string>('no');
  const [published, setPublished] = React.useState<boolean>(true);

  const handlePublishedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPublished(event.target.checked);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
  };

  const handleMinQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(+e.target.value)) {
      return;
    }
    setMinQuantity(+e.target.value);
  };

  const { classes, cx } = useProductPageStyles();

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
        htmlFor="price"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Ціна
        <StyledField
          id="price"
          variant="outlined"
          sx={{ width: '70%', mt: '16px' }}
          darkTheme={darkTheme}
        />
      </InputLabel>
      <InputLabel
        htmlFor="minQuantity"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          Мінімальна кількість
          <CustomizedTooltip title="Info" placement="right">
            <InfoIcon sx={{ color: '#1976d2' }} />
          </CustomizedTooltip>
        </Box>
        <StyledField
          id="minQuantity"
          variant="outlined"
          sx={{ width: '70%', mt: '16px' }}
          onChange={handleMinQuantityChange}
          value={minQuantity}
          darkTheme={darkTheme}
        />
      </InputLabel>
      <InputLabel
        htmlFor="inStock"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Кількість на складі
        <StyledField
          id="inStock"
          variant="outlined"
          sx={{ width: '70%', mt: '16px' }}
          darkTheme={darkTheme}
        />
      </InputLabel>
      <FormControl sx={{ mb: '24px' }}>
        <FormLabel
          id="radio-buttons-group"
          className={cx(classes.radioButtonsLabel, darkTheme ? 'dark' : null)}
        >
          Віднімати зі складу
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="radio-buttons-group"
          name="radio-buttons-group"
          value={radioValue}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="no"
            control={
              <Radio
                className={cx(classes.radioButton, darkTheme ? 'dark' : null)}
              />
            }
            label="Ні"
          />
          <FormControlLabel
            value="yes"
            control={
              <Radio
                className={cx(classes.radioButton, darkTheme ? 'dark' : null)}
              />
            }
            label="Так"
          />
        </RadioGroup>
      </FormControl>
      <ViewsDatePicker darkTheme={darkTheme} />
      <Box sx={{ mb: '24px' }}>
        <Typography
          component="p"
          className={cx(classes.publishedText, darkTheme ? 'dark' : null)}
        >
          Опубліковано
        </Typography>
        <Switch
          checked={published}
          onChange={handlePublishedChange}
          inputProps={{ 'aria-label': 'published' }}
          className={cx(classes.switch, darkTheme ? 'dark' : null)}
        />
      </Box>
      <InputLabel
        htmlFor="sort"
        className={cx(classes.noMarginLabel, darkTheme ? 'dark' : null)}
      >
        Сортування
        <StyledField
          type="number"
          id="sort"
          variant="outlined"
          sx={{ width: '10%', mt: '16px' }}
          darkTheme={darkTheme}
        />
      </InputLabel>
    </Box>
  );
};
