import React from "react";
import "./Modal.css";
import Button from "./Button";

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-close">
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
