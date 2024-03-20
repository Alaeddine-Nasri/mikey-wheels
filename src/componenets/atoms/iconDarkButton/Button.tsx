import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  icon: React.FunctionComponent<any>;
  width?: number | string;
  height?: number | string;
  size?: number | string;
}

const IconDarkButton: React.FC<ButtonProps> = ({
  onClick,
  icon: Icon,
  width = "200px",
  height = "50px",
  size = "50px",
}) => {
  return (
    <div className="iconDarkButton" onClick={onClick} style={{ width, height }}>
      <div className="icon">
        <Icon size={size} />
      </div>
    </div>
  );
};

export default IconDarkButton;
