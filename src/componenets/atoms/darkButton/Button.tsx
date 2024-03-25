import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const DarkButton: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button className="darkButton" onClick={onClick}>
      <div className="text">{label}</div>
    </button>
  );
};

export default DarkButton;
