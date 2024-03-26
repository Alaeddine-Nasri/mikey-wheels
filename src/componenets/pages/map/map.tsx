import React, { useEffect, useState } from "react";
import "./map.css";
import SVGMap from "../../atoms/mapSvg/mapSvg";
import DarkButton from "../../atoms/darkButton/Button";
import { useParams } from "react-router-dom";
import axios from "axios";
import rooms from "../../../types/data";

interface MapProps {
  id: string;
}

const Map: React.FC<MapProps> = ({ id }) => {
  const { departId, roomId } = useParams<{
    departId: string;
    roomId: string;
  }>();
  const parsedRoomId = roomId ? parseInt(roomId) : undefined;
  const parsedDepartId = departId ? parseInt(departId) : undefined;
  const [apiPath, setApiPath] = useState<[number, number][]>([]);
  const [locX, setLocX] = useState<number | undefined>(undefined);
  const [locY, setLocY] = useState<number | undefined>(undefined);
  const [DepX, setDepX] = useState<number | undefined>(undefined);
  const [DepY, setDepY] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchPath = async () => {
      try {
        if (locX !== undefined && locY !== undefined) {
          const response = await axios.post(
            "https://pathfinder-production.up.railway.app/find_path",
            {
              initial_position: { x: DepX, y: DepY },
              destination_position: { x: locX, y: locY }, // Using locX and locY here
            }
          );
          console.log("API response:", response.data);
          // Extract path array from the response and set it in state
          if (response.data && response.data.path) {
            setApiPath(
              response.data.path.map(([x, y]: [number, number]) => [x, y])
            );
          }
        }
      } catch (error) {
        console.error("Error fetching path:", error);
      }
    };

    fetchPath();
  }, [locX, locY]); // Add locX and locY as dependencies

  useEffect(() => {
    if (parsedRoomId) {
      const room = rooms.find((room) => room.id === parsedRoomId);
      if (room) {
        setLocX(room.locationX);
        setLocY(room.locationY);
      }
    }
    if (parsedDepartId) {
      const room = rooms.find((room) => room.id === parsedDepartId);
      if (room) {
        setDepX(room.locationX);
        setDepY(room.locationY);
      }
    }
  }, [parsedRoomId]);

  let pathToUse: [number, number][] = [];
  if (
    parsedRoomId === 1 ||
    parsedRoomId === 2 ||
    parsedRoomId === 3 ||
    parsedRoomId === 4
  ) {
    pathToUse = apiPath.map(([x, y]) => [x * 5.35, y * 4.7]);
  }

  return (
    <div className="mapContainer">
      <SVGMap path={pathToUse} depX={DepX} depY={DepY} />
      {/* {DepX !== undefined && DepY !== undefined && (
        <p>
          Location X: {DepX}, Location Y: {DepY}
        </p>
      )} */}
    </div>
  );
};

export default Map;
