// Button.tsx
import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const DarkButton: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <div className="darkButton">
      <div className="text">{label}</div>
    </div>
  );
};

export default DarkButton;
