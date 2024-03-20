// Home.tsx
import React from "react";
import LightButton from "../atoms/lightButton/Button";
import DarkButton from "../atoms/darkButton/Button";
import RoomsList from "../molecules/cardList/cardList";
import IconDarkButton from "../atoms/iconDarkButton/Button";
import { Mic } from "lucide-react";
import DestinationHolder from "../organisms/destinationHolder/destinationHolder";

const Home: React.FC = () => {
  const handleClick = () => {
    // Handle button click logic
    console.log("Button Clicked!");
  };
  return (
    <div>
      {/* <LightButton onClick={handleClick} label="Click Me" />
      <DarkButton onClick={handleClick} label="Dark Button" /> */}
      <DestinationHolder />
    </div>
  );
};

export default Home;
