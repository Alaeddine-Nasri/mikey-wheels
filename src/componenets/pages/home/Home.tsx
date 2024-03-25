// Home.tsx
import React from "react";
import DestinationHolder from "../../organisms/destinationHolder/destinationHolder";
import "./Home.css";
import InstructionHolder from "../../organisms/instructionHolder/instructionHolder";
import RoomBox from "../../atoms/roomBox/roomBox";
import DarkButton from "../../atoms/darkButton/Button";
import SVGMap from "../../atoms/mapSvg/mapSvg";
import path from "../../../types/path";

const Home: React.FC = () => {
  const multipliedPath = path.map(([x, y]) => [x * 5.35, y * 4.7]);
  return (
    <div className="homeContainer">
      <div className="left">
        <DestinationHolder />
      </div>
      <div className="right">
        <InstructionHolder />
      </div>
    </div>
  );
};

export default Home;
