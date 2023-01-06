import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import { useGlobalContext } from '../../../hooks/GlobalContext';
import { useBasicActionsStyles } from './BasicActions.styles';
import Modal from '../../Modal';
import { Link } from 'react-router-dom';

interface IBasicActionsProps {
  id: string;
}

const BasicActions: React.FC<IBasicActionsProps> = ({ id }) => {
  const { darkTheme } = useGlobalContext();
  const [openDeleteModal, setOpenDeleteModal] = React.useState<boolean>(false);

  const handleClickOpenModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseModal = () => {
    setOpenDeleteModal(false);
  };

  const { classes, cx } = useBasicActionsStyles();

  return (
    <>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Link to={`${id}/edit`}>
          <IconButton
            sx={{ display: 'flex', justifyContent: 'center', ml: 1 }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="edit"
          >
            <EditIcon
              className={cx(classes.editIcon, darkTheme ? 'dark' : null)}
            />
          </IconButton>
        </Link>
        <IconButton
          sx={{ display: 'flex', justifyContent: 'center' }}
          size="large"
          edge="start"
          color="inherit"
          aria-label="delete"
          onClick={handleClickOpenModal}
        >
          <DeleteIcon
            className={cx(classes.deleteIcon, darkTheme ? 'dark' : null)}
          />
        </IconButton>
      </Box>
      {openDeleteModal && (
        <Modal
          shouldOpenModal={openDeleteModal}
          handleCloseModal={handleCloseModal}
          type={'delete'}
        />
      )}
    </>
  );
};

export default BasicActions;
