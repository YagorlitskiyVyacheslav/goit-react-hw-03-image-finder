import React from "react";
import Overlay from './modal.component';
import PropTypes from "prop-types";

function Modal({ onClose, children }) {
  return (
    <Overlay id="overlay" onClick={onClose}>
      <Overlay.ModalBox>{children}</Overlay.ModalBox>
    </Overlay>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default Modal;