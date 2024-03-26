// DropDown.tsx
import React, { useState } from "react";
import "./dropDown.css"; // Import the CSS file for DropDown styling
import rooms from "../../../types/data";
import { ChevronDown } from "lucide-react";

interface DropDownProps {
  onSelect: (roomId: number) => void;
  onSelectDeparture: (departureId: number) => void; // Add onSelectDeparture prop
}

const DropDown: React.FC<DropDownProps> = ({ onSelect, onSelectDeparture }) => {
  const [selectedDeparture, setSelectedDeparture] = useState<
    number | undefined
  >(undefined);

  const handleDepartureSelect = (departureId: number) => {
    onSelectDeparture(departureId); // Call onSelectDeparture callback with selected departureId
    setSelectedDeparture(departureId);
  };

  return (
    <div className="dropdown-container">
      <select
        className="dropdown"
        onChange={(e) => handleDepartureSelect(parseInt(e.target.value))}
      >
        <ChevronDown size={16} className="icon" />
        <option value="">Select a departure</option>
        {rooms.map((room) => (
          <option key={room.id} value={room.id}>
            {room.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
