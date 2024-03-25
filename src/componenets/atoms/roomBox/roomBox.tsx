import React from "react";
import "./roomBox.css";

interface RoomBoxProps {
  text: string;
}

const RoomBox: React.FC<RoomBoxProps> = ({ text }) => {
  return (
    <div className="room-box">
      <div className="gradient-background"></div>
      <div className="text">{text}</div>
    </div>
  );
};

export default RoomBox;
