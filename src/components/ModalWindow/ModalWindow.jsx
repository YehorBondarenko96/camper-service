import { useEffect } from 'react';
import { useLockBodyScroll } from 'react-use';
import { Backdrop, ButtonClose, CloseIcon, Container, ModalBody } from './ModalWindow.styled';
import icon from "../../Vector.svg"

const ModalWindow = ({ onClose, children }) => {
  useLockBodyScroll(true);

  useEffect(() => {
    const onEscPress = e => {
      if (e.code === 'Escape')  onClose();
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [onClose]);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleClick}>
        <Container>
        <ButtonClose
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
            <CloseIcon>
              <use href={`${icon}#close`}></use>
            </CloseIcon>
        </ButtonClose>
        <ModalBody>
          {children}
        </ModalBody>
      </Container>
    </Backdrop>
  )
};

export default ModalWindow;