import React, { useState, useEffect } from "react";
import "./mapSvg.css";
import Popup from "../popUp/popUp";
import IconDarkButton from "../iconDarkButton/Button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface SVGMapProps {
  path: [number, number][];
  depX: number | undefined;
  depY: number | undefined;
}

const SVGMap: React.FC<SVGMapProps> = ({ path, depX, depY }) => {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < path.length) {
        const [x, y] = path[currentIndex];
        setRobotPosition({ x, y });
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setAnimationCompleted(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [path]);

  const handleCloseModal = () => {
    setAnimationCompleted(false);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("start");
    navigate("/home");
  };

  return (
    <div className="svg-map">
      <div className="svg-map-container">
        <div className="buttonback">
          <IconDarkButton
            onClick={handleClick}
            icon={ChevronLeft}
            width="70px"
            height="70px"
            size="50px"
          />
        </div>
        {/* viewBox="31 -8 100 100" */}

        <svg
          viewBox="31 -8 100 100"
          // viewBox={`${depX !== undefined ? -depX * 5.3 + 31 : 31} ${
          //   depY !== undefined ? depY - 13 : -8
          // } 100 100`}
          width="100%"
          height="100%"
        >
          {/* Render the path */}
          <path d={getPathString(path)} stroke="#8453fa" fill="none" />
          {/* Render the robot image */}
          <image
            className="robot"
            href="/robot.png"
            x={robotPosition.x - 2.5}
            y={robotPosition.y - 3}
            width="5"
            height="5"
          />
        </svg>
      </div>
      {/* Render the pop-up modal when animation is completed */}
      {animationCompleted && <Popup onClose={handleCloseModal} />}
    </div>
  );
};

// Helper function to generate SVG path string from coordinates
const getPathString = (path: [number, number][]): string => {
  return path.reduce((acc, [x, y], index) => {
    if (index === 0) {
      return `M ${x} ${y}`;
    }
    return `${acc} L ${x} ${y}`;
  }, "");
};

export default SVGMap;
