import React from "react";
import "./landing.css";
import DarkButton from "../../atoms/darkButton/Button";
import { useNavigate } from "react-router-dom";
import LightButton from "../../atoms/lightButton/Button";

const Landing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("start");
    navigate("/home");
  };
  return (
    <div className="landingContainer">
      <div className="circleContainer">
        <img src="/robot.png" alt="Robot Logo" className="logo" />
      </div>
      <LightButton onClick={handleClick} label={"Start"} />
    </div>
  );
};

export default Landing;
