import React from "react";
import Overlay from './modal.component';

export default function Modal(props) {
  return (
    <Overlay id='overlay' onClick={props.onClose}>
      <Overlay.ModalBox>{props.children}</Overlay.ModalBox>
    </Overlay>
  );
}