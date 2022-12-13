import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Divider, List, ListItem, Typography } from '@mui/material';
import CollapsedBreadcrumbs from '../Crumbs';
import { useFAQPageStyles } from './FAQPage.styles';
import { BasicFAQ, ConnectionsFAQ } from './SubLinks';
import Modal from '../Modal';
import { FAQType } from '../types/FAQTypes';

interface IFAQPageProps {
  chosenQuestion: FAQType;
  darkTheme: boolean;
}

const links = [
  { name: 'загальне', id: 1 },
  { name: "зв'язок", id: 2 },
];

const FAQPage: React.FC<IFAQPageProps> = ({ chosenQuestion, darkTheme }) => {
  const { classes, cx } = useFAQPageStyles();
  const [linkId, setLinkId] = React.useState<number>(1);
  const [openBackModal, setOpenBackModal] = React.useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState<boolean>(false);
  const [openSaveModal, setOpenSaveModal] = React.useState<boolean>(false);

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

  const handleClickLink = (id: number) => {
    setLinkId(id as number);
  };

  return (
    <Box>
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
      <Box className={classes.panel}>
        <Box>
          <CollapsedBreadcrumbs
            productName={chosenQuestion!.name}
            darkTheme={darkTheme}
          />
          <Typography component="h2" className={classes.productTitle}>
            {chosenQuestion!.name}
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
      <List className={classes.linksList}>
        {links.map(link => {
          return (
            <ListItem
              key={link.id}
              className={classes.linksListItem}
              onClick={() => handleClickLink(link.id)}
            >
              <Typography
                className={cx(
                  classes.linksListText,
                  linkId === link.id ? 'active' : null
                )}
                component="p"
              >
                {link.name.toLocaleUpperCase()}
              </Typography>
            </ListItem>
          );
        })}
      </List>
      <Divider className={cx(classes.divider, darkTheme ? 'dark' : null)} />
      {linkId === 1 && <BasicFAQ darkTheme={darkTheme} />}
      {linkId === 2 && <ConnectionsFAQ darkTheme={darkTheme} />}
    </Box>
  );
};

export default FAQPage;
