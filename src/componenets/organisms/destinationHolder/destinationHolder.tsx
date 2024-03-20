import React from "react";
import RoomsList from "../../molecules/cardList/cardList";

const DestinationHolder: React.FC = () => {
  const handleSearch = (searchTerm: string) => {
    // Handle search logic here
  };

  return (
    <div>
      <RoomsList />
    </div>
  );
};

export default DestinationHolder;
