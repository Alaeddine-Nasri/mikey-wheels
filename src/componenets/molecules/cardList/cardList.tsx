import React, { useState, useEffect } from "react";
import rooms from "../../../types/data";
import { Item } from "../../../types/types";
import { ChevronLeft, QrCode } from "lucide-react";
import SearchBar from "../../atoms/searchBar/searchBar";
import CardItem from "../../atoms/cardItem/cardItem";
import IconDarkButton from "../../atoms/iconDarkButton/Button";
import { useNavigate } from "react-router-dom";
import "./cardList.css";
import DropDown from "../../atoms/dropDown/dropDown";
import QRScannerComponent from "../../pages/qrCode/qrCodeComponent";
import Modal from "../../atoms/modal/modal";

const RoomsList: React.FC = () => {
  const [filteredRooms, setFilteredRooms] = useState<Item[]>(rooms);
  const [showScanner, setShowScanner] = useState<boolean>(false);
  const [data, setData] = useState("No result");
  const [selectedDeparture, setSelectedDeparture] = useState<
    number | undefined
  >(undefined);
  const [qrResult, setQrResult] = useState<string>("None");
  const navigate = useNavigate();

  useEffect(() => {
    if (qrResult !== "None") {
      const departureId = parseInt(qrResult[13]);
      if (!isNaN(departureId)) {
        handleDepartureSelect(departureId);
      }
    }
  }, [qrResult]);

  const handleSearch = (searchTerm: string) => {
    const filtered = rooms.filter((room) =>
      room.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRooms(filtered);
  };

  const handleClick = (roomId: number) => {
    console.log("Clicked room ID:", roomId);
    if (selectedDeparture !== undefined) {
      navigate(`/map/${selectedDeparture}/${roomId}`);
    } else {
      console.error("No departure selected");
    }
  };

  const handleClick2 = () => {
    navigate(`/`);
  };

  const handleClick3 = () => {
    setShowScanner(true);
  };

  const handleRoomSelect = (roomId: number) => {
    console.log("Selected room ID:", roomId);
  };

  const handleDepartureSelect = (departureId: number) => {
    console.log("Selected departure ID:", departureId);
    setSelectedDeparture(departureId);
  };

  return (
    <div className="CardslistContainer">
      <div className="al">
        <IconDarkButton
          onClick={handleClick2}
          icon={ChevronLeft}
          width="60px"
          height="60px"
          size="40px"
        />
        <div className="btncntr">
          <p className="title">List of rooms</p>
          <p className="text">Please select a departure point.</p>
        </div>
      </div>
      <div className="al">
        <DropDown
          onSelect={handleRoomSelect}
          onSelectDeparture={handleDepartureSelect}
        />
        <div className="btncntr">
          <IconDarkButton
            onClick={handleClick3}
            icon={QrCode}
            width="60px"
            height="60px"
            size="30px"
          />
        </div>
      </div>
      {qrResult !== "None" && (
        <p className="smalltext">
          You are at : <b>{qrResult.slice(6, 14)}</b>
        </p>
      )}
      <SearchBar onSearch={handleSearch} />
      <div className="scrollable">
        {filteredRooms.map((room) => (
          <CardItem
            key={room.id}
            item={room}
            onClick={() => handleClick(room.id)}
          />
        ))}
      </div>
      <Modal show={showScanner} onClose={() => setShowScanner(false)}>
        <QRScannerComponent setQrResult={setQrResult} />
      </Modal>
    </div>
  );
};

export default RoomsList;
