// Popup.tsx
import React from "react";
import "./popUp.css";
import DarkButton from "../darkButton/Button";

interface PopupProps {
  onClose: () => void;
  message: string; // New prop for the message
  message2: string;
}

const Popup: React.FC<PopupProps> = ({ onClose, message, message2 }) => {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>{message}</h2>
        <p>{message2}</p>
        <DarkButton onClick={onClose} label={"Close"}></DarkButton>
      </div>
    </div>
  );
};

export default Popup;
