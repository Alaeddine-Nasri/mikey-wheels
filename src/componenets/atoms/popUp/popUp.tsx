// Popup.tsx
import React from "react";
import "./popUp.css";
import DarkButton from "../darkButton/Button";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Congratulations!</h2>
        <p>You have arrived at your destination.</p>
        <DarkButton onClick={onClose} label={"Close"}></DarkButton>
      </div>
    </div>
  );
};

export default Popup;
