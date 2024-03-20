// Button.tsx
import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const LightButton: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <div className="lightButton">
      <div className="text">{label}</div>
    </div>
  );
};

export default LightButton;
