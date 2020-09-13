import React from 'react';
import Modal from '@material-ui/core/Modal';
import ModalCard from '../ModalCard/ModalCard.jsx';



const ModalScreen = (props) => {
  
  const { open, setOpen, setCity, data } = props;

  const { forecast } = data;

  const handleClose = () => {
    setOpen(false);
    setCity(null);
  }
  
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{display: 'flex', justifyContent: 'center'}}
      >
          <ModalCard 
            onClose={handleClose} 
            data={forecast} 
          />
      </Modal>
    </>
  );
}

export default ModalScreen;