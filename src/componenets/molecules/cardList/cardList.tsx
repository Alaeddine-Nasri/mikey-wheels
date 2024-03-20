import React, { useState } from "react";
import rooms from "../../../types/data";
import { Item } from "../../../types/types";
import { ChevronLeft } from "lucide-react";
import SearchBar from "../../atoms/searchBar/searchBar";
import CardItem from "../../atoms/cardItem/cardItem";
import IconDarkButton from "../../atoms/iconDarkButton/Button";

const RoomsList: React.FC = () => {
  const [filteredRooms, setFilteredRooms] = useState<Item[]>(rooms);

  const handleClick = () => {};

  const handleSearch = (searchTerm: string) => {
    const filtered = rooms.filter((room) =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRooms(filtered);
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* <IconDarkButton onClick={handleClick} icon={ChevronLeft} /> */}
        <IconDarkButton
          onClick={handleClick}
          icon={ChevronLeft}
          width="70px"
          height="70px"
          size="50px"
        />
        <SearchBar onSearch={handleSearch} />
      </div>
      {filteredRooms.map((room) => (
        <CardItem key={room.id} item={room} />
      ))}
    </div>
  );
};

export default RoomsList;
