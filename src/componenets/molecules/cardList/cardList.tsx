// RoomsList.tsx
import React, { useState } from "react";
import rooms from "../../../types/data";
import { Item } from "../../../types/types";
import { ChevronLeft, QrCode } from "lucide-react";
import SearchBar from "../../atoms/searchBar/searchBar";
import CardItem from "../../atoms/cardItem/cardItem";
import IconDarkButton from "../../atoms/iconDarkButton/Button";
import { useNavigate } from "react-router-dom";
import "./cardList.css";
import DropDown from "../../atoms/dropDown/dropDown";
import { QrReader } from "react-qr-reader";

const RoomsList: React.FC = () => {
  const [filteredRooms, setFilteredRooms] = useState<Item[]>(rooms);
  const [showScanner, setShowScanner] = useState<boolean>(false);
  const [data, setData] = useState("No result");
  const [selectedDeparture, setSelectedDeparture] = useState<
    number | undefined
  >(undefined); // Add selectedDeparture state
  const navigate = useNavigate();

  const handleSearch = (searchTerm: string) => {
    const filtered = rooms.filter((room) =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRooms(filtered);
  };

  const handleClick = (roomId: number) => {
    console.log("Clicked room ID:", roomId);
    if (selectedDeparture !== undefined) {
      navigate(`/map/${selectedDeparture}/${roomId}`); // Navigate with both departureId and roomId
    } else {
      console.error("No departure selected");
    }
  };

  const handleClick2 = () => {
    navigate(`/`);
  };

  const handleRoomSelect = (roomId: number) => {
    console.log("Selected room ID:", roomId);
    // Handle room selection logic here
  };

  const handleDepartureSelect = (departureId: number) => {
    console.log("Selected departure ID:", departureId);
    setSelectedDeparture(departureId);
  };

  return (
    <div className="al">
      {/* <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      /> */}
      <div className="al" style={{ display: "flex", alignItems: "center" }}>
        <IconDarkButton
          onClick={handleClick2}
          icon={ChevronLeft}
          width="70px"
          height="70px"
          size="50px"
        />
        <DropDown
          onSelect={handleRoomSelect}
          onSelectDeparture={handleDepartureSelect}
        />
        <IconDarkButton
          onClick={() => setShowScanner(true)} // Show QR code scanner when clicked
          icon={QrCode}
          width="70px"
          height="70px"
          size="30px"
        />
      </div>
      <SearchBar onSearch={handleSearch} />

      {filteredRooms.map((room) => (
        <CardItem
          key={room.id}
          item={room}
          onClick={() => handleClick(room.id)}
        />
      ))}
    </div>
  );
};

export default RoomsList;
