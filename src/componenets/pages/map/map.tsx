import React from "react";
import "./map.css";
import SVGMap from "../../atoms/mapSvg/mapSvg";
import path1 from "../../../types/path";
import path2 from "../../../types/path2";
import path3 from "../../../types/path3";
import path4 from "../../../types/path4";
import DarkButton from "../../atoms/darkButton/Button";
import { useParams } from "react-router-dom";

const Map: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const parsedRoomId = roomId ? parseInt(roomId) : undefined;

  let pathToUse: [number, number][] = [];
  if (parsedRoomId === 1) {
    pathToUse = path1.map(([x, y]) => [x * 5.35, y * 4.7]);
  } else if (parsedRoomId === 3) {
    pathToUse = path2.map(([x, y]) => [x * 5.35, y * 4.7]);
  } else if (parsedRoomId === 2) {
    pathToUse = path3.map(([x, y]) => [x * 5.35, y * 4.7]);
  } else if (parsedRoomId === 4) {
    pathToUse = path4.map(([x, y]) => [x * 5.35, y * 4.7]);
  }

  return (
    <div className="mapContainer">
      <SVGMap path={pathToUse} />
    </div>
  );
};

export default Map;
