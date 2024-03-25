import React from "react";
import "./instructionHolder.css"; // Import the CSS file
import IconDarkButton from "../../atoms/iconDarkButton/Button";
import { Mic } from "lucide-react";

const InstructionHolder: React.FC = () => {
  const handleClick = () => {};
  return (
    <div className="instruction-holder">
      <div className="guding-holder">
        <div className="background-holder"></div>
        <p className="guiding-text">
          Bonjour, je suis Mikey. Je peux vous guider à travers cette école.
          Choisissez simplement une destination, et je m'occuperai du reste.
        </p>
      </div>
      <div className="vocal-holder">
        <h2> Guidage Vocal</h2>
        <IconDarkButton
          onClick={handleClick}
          icon={Mic}
          width="200px"
          height="200px"
          size="80px"
        />
      </div>
    </div>
  );
};

export default InstructionHolder;
