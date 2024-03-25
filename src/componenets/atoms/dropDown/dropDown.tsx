// components/DropDown.tsx
import React from "react";
import "./dropDown.css"; // Import the CSS file for DropDown styling
import rooms from "../../../types/data";
import { ChevronDown } from "lucide-react";

interface DropDownProps {
  onSelect: (roomId: number) => void;
}

const DropDown: React.FC<DropDownProps> = ({ onSelect }) => {
  const handleRoomSelect = (roomId: number) => {
    onSelect(roomId);
  };

  return (
    <select
      className="dropdown"
      onChange={(e) => handleRoomSelect(parseInt(e.target.value))}
    >
      <ChevronDown size={16} className="icon" />
      <option value="">Select a room</option>
      {rooms.map((room) => (
        <option key={room.id} value={room.id}>
          {room.name}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
