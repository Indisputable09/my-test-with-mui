import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Divider,
  InputLabel,
  Typography,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Autocomplete,
  Switch,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CollapsedBreadcrumbs from '../Crumbs';
import Modal from '../Modal';
import { StyledField, useLanguagesPageStyles } from './LanguagesPage.styles';
import { StyledCustomPaper } from '../ProductPage/ProductPage.styles';

interface ILanguagesPageProps {
  chosenLanguage: { id: number; name: string };
  darkTheme: boolean;
}

interface ICustomizedTooltipProps extends TooltipProps {
  darkTheme: boolean;
}

const icons = ['ukr', 'eng'];

const CustomizedTooltip = styled(
  ({ className, darkTheme, ...props }: ICustomizedTooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  )
)(({ theme, darkTheme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: darkTheme ? '#ffffff' : '#1F2A38',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: darkTheme ? '#1F2A38' : '#ffffff',
    color: darkTheme ? '#ffffff' : '#111111',
    border: darkTheme ? '1px solid #ffffff' : '1px solid #111111',
  },
}));

const LanguagesPage: React.FC<ILanguagesPageProps> = ({
  darkTheme,
  chosenLanguage,
}) => {
  const [openBackModal, setOpenBackModal] = React.useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState<boolean>(false);
  const [openSaveModal, setOpenSaveModal] = React.useState<boolean>(false);
  const [mainLanguage, setMainLanguage] = React.useState<boolean>(true);
  const [indexed, setIndexed] = React.useState<boolean>(false);

  const handlePublishedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMainLanguage(event.target.checked);
  };

  const handleIndexedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndexed(event.target.checked);
  };

  const handleClickOpenModal = (variant: string) => {
    if (variant === 'back') {
      setOpenBackModal(true);
    } else if (variant === 'delete') {
      setOpenDeleteModal(true);
    } else if (variant === 'save') {
      setOpenSaveModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenBackModal(false);
    setOpenDeleteModal(false);
    setOpenSaveModal(false);
  };

  const { classes, cx } = useLanguagesPageStyles();
  return (
    <Box>
      <Box className={classes.panel}>
        <Box>
          <CollapsedBreadcrumbs
            productName={chosenLanguage!.name}
            darkTheme={darkTheme}
          />
          <Typography component="h2" className={classes.productTitle}>
            {chosenLanguage!.name}
          </Typography>
        </Box>
        <Box className={classes.buttonsBlock}>
          <IconButton
            className={classes.button}
            size="small"
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={() => handleClickOpenModal('back')}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            className={classes.button}
            size="small"
            edge="start"
            color="inherit"
            aria-label="save"
            onClick={() => handleClickOpenModal('save')}
          >
            <SaveIcon />
          </IconButton>
          <IconButton
            className={classes.button}
            size="small"
            edge="start"
            color="inherit"
            aria-label="delete"
            onClick={() => handleClickOpenModal('delete')}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider className={cx(classes.divider, darkTheme ? 'dark' : null)} />
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
          htmlFor="name"
          className={cx(classes.label, darkTheme ? 'dark' : null)}
        >
          Назва
          <StyledField
            id="name"
            variant="outlined"
            sx={{ width: '100%', mt: '16px' }}
            required
            darkTheme={darkTheme}
          />
        </InputLabel>
        <InputLabel
          htmlFor="ISO"
          className={cx(classes.label, darkTheme ? 'dark' : null)}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            Код ISO
            <CustomizedTooltip
              title="en, uk"
              placement="right"
              darkTheme={darkTheme}
            >
              <InfoIcon sx={{ color: '#27AE60' }} />
            </CustomizedTooltip>
          </Box>
          <StyledField
            id="ISO"
            variant="outlined"
            sx={{ width: '100%', mt: '16px' }}
            required
            darkTheme={darkTheme}
          />
        </InputLabel>

        <InputLabel
          htmlFor="icon"
          className={cx(classes.label, darkTheme ? 'dark' : null)}
        >
          Значок
          <Autocomplete
            id="autocomplete-icon"
            noOptionsText={<p>Відсутні результати</p>}
            options={icons}
            className={cx(classes.autocomplete, darkTheme ? 'dark' : null)}
            renderInput={params => (
              <StyledField {...params} darkTheme={darkTheme} />
            )}
            PaperComponent={props => {
              return <StyledCustomPaper {...props} darkTheme={darkTheme} />;
            }}
            ListboxProps={{
              style: {
                maxHeight: '150px',
              },
            }}
          />
        </InputLabel>
        <InputLabel
          htmlFor="url"
          className={cx(classes.label, darkTheme ? 'dark' : null)}
        >
          Відображення в URL
          <StyledField
            id="url"
            variant="outlined"
            sx={{ width: '100%', mt: '16px' }}
            required
            darkTheme={darkTheme}
          />
        </InputLabel>
        <Box sx={{ mb: '24px' }}>
          <Typography
            component="p"
            className={cx(classes.mainLanguageText, darkTheme ? 'dark' : null)}
          >
            Основна мова
          </Typography>
          <Switch
            checked={mainLanguage}
            onChange={handlePublishedChange}
            inputProps={{ 'aria-label': 'published' }}
            className={cx(classes.switch, darkTheme ? 'dark' : null)}
          />
        </Box>
        <Box sx={{ mb: '24px' }}>
          <Typography
            component="p"
            className={cx(classes.mainLanguageText, darkTheme ? 'dark' : null)}
          >
            <Box
              component="span"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              Індексований
              <CustomizedTooltip
                title="no follow, no index"
                placement="right"
                darkTheme={darkTheme}
              >
                <InfoIcon sx={{ color: '#27AE60' }} />
              </CustomizedTooltip>
            </Box>
          </Typography>
          <Switch
            checked={indexed}
            onChange={handleIndexedChange}
            inputProps={{ 'aria-label': 'published' }}
            className={cx(classes.switch, darkTheme ? 'dark' : null)}
          />
        </Box>
      </Box>
      {openBackModal && (
        <Modal
          shouldOpenModal={openBackModal}
          handleCloseModal={handleCloseModal}
          type={'back'}
        />
      )}
      {openDeleteModal && (
        <Modal
          shouldOpenModal={openDeleteModal}
          handleCloseModal={handleCloseModal}
          type={'delete'}
        />
      )}
      {openSaveModal && (
        <Modal
          shouldOpenModal={openSaveModal}
          handleCloseModal={handleCloseModal}
          type={'save'}
        />
      )}
    </Box>
  );
};

export default LanguagesPage;
