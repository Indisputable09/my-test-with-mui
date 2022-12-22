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
  // console.log('date value', value);

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
  setFieldsValues: (obj: any) => void;
  fieldsValues: {
    price: number;
    minQuantity: number;
    inStock: number;
    fromStock: string;
    published: boolean;
    sort: number;
  };
}

export const Data: React.FC<IDataProps> = ({
  darkTheme,
  setFieldsValues,
  fieldsValues,
}) => {
  const handlePublishedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldsValues((prevState: any) => {
      return {
        ...prevState,
        published: (e.target as HTMLInputElement).checked,
      };
    });
  };

  const handleFromStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldsValues((prevState: any) => {
      return {
        ...prevState,
        fromStock: (e.target as HTMLInputElement).value,
      };
    });
  };

  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(+e.target.value)) {
      return;
    }
    setFieldsValues((prevState: any) => {
      return {
        ...prevState,
        [e.target.id]: Number((e.target as HTMLInputElement).value),
      };
    });
  };

  const { classes, cx } = useProductPageStyles();

  return (
    <>
      <InputLabel
        htmlFor="price"
        className={cx(classes.label, darkTheme ? 'dark' : null)}
      >
        Ціна
        <StyledField
          id="price"
          variant="outlined"
          sx={{ width: '100%', mt: '16px' }}
          darkTheme={darkTheme}
          onChange={handleInputsChange}
          value={fieldsValues.price}
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
          sx={{ width: '100%', mt: '16px' }}
          onChange={handleInputsChange}
          value={fieldsValues.minQuantity}
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
          sx={{ width: '100%', mt: '16px' }}
          darkTheme={darkTheme}
          onChange={handleInputsChange}
          value={fieldsValues.inStock}
        />
      </InputLabel>
      <FormControl sx={{ mb: '24px' }}>
        <FormLabel
          id="take-from-stock"
          className={cx(classes.radioButtonsLabel, darkTheme ? 'dark' : null)}
        >
          Віднімати зі складу
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="take-from-stock"
          name="take-from-stock"
          value={fieldsValues.fromStock}
          onChange={handleFromStockChange}
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
          checked={fieldsValues.published}
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
          onChange={handleInputsChange}
          value={fieldsValues.sort}
        />
      </InputLabel>
    </>
  );
};
