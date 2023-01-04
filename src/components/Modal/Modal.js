import { useEffect } from 'react';
import css from '../../styles/Common.module.css';
import PropTypes from 'prop-types';

const Modal = ({ toggleModal, largeImage }) => {
  useEffect(() => {
    const handleKeyDown = e => e.code === 'Escape' && toggleModal();

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handleBackdropClick = e => {
    e.target === e.currentTarget && toggleModal();
  };

  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};
