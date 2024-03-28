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
import Popup from "../../atoms/popUp/popUp";

const RoomsList: React.FC = () => {
  const [filteredRooms, setFilteredRooms] = useState<Item[]>(rooms);
  const [showScanner, setShowScanner] = useState<boolean>(false);
  const [data, setData] = useState("No result");
  const [selectedDeparture, setSelectedDeparture] = useState<
    number | undefined
  >(undefined);
  const [qrResult, setQrResult] = useState<string>("None");
  const navigate = useNavigate();
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    if (qrResult !== "None") {
      const departureId = parseInt(qrResult[13]);
      if (!isNaN(departureId)) {
        handleDepartureSelect(departureId);
        setShowScanner(false);
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
      setAnimationCompleted(true);
    }
  };
  const handleCloseModal = () => {
    setAnimationCompleted(false);
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
          <p className="title">List des destinations</p>
          <p className="text">Selectioner un point de depart.</p>
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
      {qrResult == "None" && (
        <p className="smalltext">Scanner le code QR pour ce positioner</p>
      )}
      {qrResult !== "None" && (
        <p className="smalltext">
          Ta position est : <b>{qrResult.slice(0, 14)}</b>
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

      {animationCompleted && (
        <Popup
          onClose={handleCloseModal}
          message={"Oops !"}
          message2={"Selection un point de départ avant la destination"}
        />
      )}
    </div>
  );
};

export default RoomsList;
