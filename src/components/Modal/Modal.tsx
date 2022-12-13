import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IModalProps {
  shouldOpenModal: boolean;
  handleCloseModal: () => void;
  type?: string;
}

const Modal: React.FC<IModalProps> = ({
  shouldOpenModal,
  handleCloseModal,
  type = 'delete',
}) => {
  const handleAgreeClick = () => {
    handleCloseModal();
    console.log('User agreed');
  };

  const handleDisareeClick = () => {
    handleCloseModal();
    console.log('User disagreed');
  };

  return (
    <div>
      <Dialog
        open={shouldOpenModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseModal}
        aria-describedby="alert-dialog-slide-description"
        sx={{ width: '444px', textAlign: 'center', mx: 'auto' }}
      >
        <DialogTitle>
          {type === 'delete' && 'Ви впевнені, що хочете видалити?'}
          {type === 'save' && 'Ви впевнені, що хочете зберегти?'}
          {type === 'back' &&
            'Змінені данні не будуть збережені. Бажаєте покинути сторінку?'}
        </DialogTitle>
        <DialogActions sx={{}}>
          <Button
            onClick={handleAgreeClick}
            variant="outlined"
            sx={{ width: '50%' }}
          >
            Так
          </Button>
          <Button
            onClick={handleDisareeClick}
            variant="contained"
            sx={{ width: '50%' }}
          >
            Скасувати
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
