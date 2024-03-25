// CardItem.tsx
import React from "react";
import { Item } from "../../../types/types";
import "./cardItem.css";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Props {
  item: Item;
  onClick: () => void;
}

const CardItem: React.FC<Props> = ({ item, onClick }) => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/map");
  // };
  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">
        <div className="card-left-side">
          <h3>{item.name}</h3>
          <p>Type: {item.type}</p>
        </div>
        <div className="card-right-side">
          <p>
            Location: ({item.locationX}, {item.locationY})
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
