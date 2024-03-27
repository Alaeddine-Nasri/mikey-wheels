// Modal.tsx
import React from "react";
import "./modal.css";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children?: React.ReactNode; // Ajout de la prop children
}

const Modal: React.FC<ModalProps> = ({ children, show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
