import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
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
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InfoIcon from '@mui/icons-material/Info';
import { useBasicPageStyles } from '../ProductPage.styles';

export default function ViewsDatePicker() {
  const [value, setValue] = React.useState<Date | Dayjs | null>(
    dayjs('2022-04-07')
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
              sx={{
                display: 'flex',
                flexDirection: 'column',
                mb: '24px',
                color: '#000',
              }}
            >
              Date of publication
              <TextField
                {...params}
                helperText={null}
                sx={{ width: '70%', mt: '16px' }}
              />
            </InputLabel>
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}

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

export const Basic: React.FC = () => {
  const [alignment, setAlignment] = React.useState<string>('left');
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

  const handleAlignClick = (side: string) => {
    setAlignment(side);
  };

  const handleMinQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(+e.target.value)) {
      return;
    }
    setMinQuantity(+e.target.value);
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
      <InputLabel
        htmlFor="name"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mb: '24px',
          color: '#000',
        }}
      >
        <div>
          Name<span style={{ color: 'red', fontSize: '20px' }}>*</span>
        </div>
        <TextField
          id="name"
          variant="outlined"
          sx={{ width: '70%', mt: '16px' }}
          required
        />
      </InputLabel>
      <InputLabel
        htmlFor="sku"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mb: '24px',
          color: '#000',
        }}
      >
        SKU
        <TextField
          id="sku"
          variant="outlined"
          sx={{ width: '70%', mt: '16px' }}
        />
      </InputLabel>
      <ViewsDatePicker />
      <Typography component="h2" sx={{ mb: '46px', mt: 2 }}>
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
      <Divider sx={{ mt: '24px', borderColor: 'black' }} />
      <InputLabel
        htmlFor="price"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          my: '24px',
          color: '#000',
        }}
      >
        Price
        <TextField
          id="price"
          variant="outlined"
          sx={{ width: '70%', mt: '16px' }}
        />
      </InputLabel>
      <InputLabel
        htmlFor="priceWithDiscount"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mb: '24px',
          color: '#000',
        }}
      >
        Price with discount
        <TextField
          id="priceWithDiscount"
          variant="outlined"
          sx={{ width: '70%', mt: '16px' }}
        />
      </InputLabel>
      <InputLabel
        htmlFor="minQuantity"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mb: '24px',
          color: '#000',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          Minimal quantity
          <CustomizedTooltip title="Info" placement="right">
            {/* <IconButton sx={{ color: '#1976d2' }}> */}
            <InfoIcon sx={{ color: '#1976d2' }} />
            {/* </IconButton> */}
          </CustomizedTooltip>
        </Box>
        <TextField
          id="minQuantity"
          variant="outlined"
          sx={{ width: '70%', mt: '16px' }}
          onChange={handleMinQuantityChange}
          value={minQuantity}
        />
      </InputLabel>
      <InputLabel
        htmlFor="inStock"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mb: '24px',
          color: '#000',
        }}
      >
        In stock
        <TextField
          id="inStock"
          variant="outlined"
          sx={{ width: '70%', mt: '16px' }}
        />
      </InputLabel>
      <FormControl>
        <FormLabel id="radio-buttons-group" sx={{ color: '#000', mb: '16px' }}>
          Take from the stock
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="radio-buttons-group"
          name="radio-buttons-group"
          value={radioValue}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        </RadioGroup>
      </FormControl>
      <Box>
        <Typography component="p" sx={{ mt: '24px', color: '#000' }}>
          Published
        </Typography>
        <Switch
          checked={published}
          onChange={handlePublishedChange}
          inputProps={{ 'aria-label': 'published' }}
        />
      </Box>
    </Box>
  );
};
