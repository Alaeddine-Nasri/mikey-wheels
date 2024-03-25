import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const LightButton: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button className="lightButton" onClick={onClick}>
      <div className="text">{label}</div>
    </button>
  );
};

export default LightButton;
