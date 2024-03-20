import React from "react";
import { Item } from "../../../types/types";
import "./cardItem.css";

interface Props {
  item: Item;
}

const CardItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="card">
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
