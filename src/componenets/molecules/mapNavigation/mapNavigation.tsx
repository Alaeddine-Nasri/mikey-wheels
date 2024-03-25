// import React from "react";
// import { MapInteractionCSS } from "react-map-interaction";

// const NavigationMap: React.FC = () => {
//   return (
//     <MapInteractionCSS scale={1} translation={{ x: 0, y: 0 }}>
//       <img src="/map.png" alt="Map" />
//     </MapInteractionCSS>
//   );
// };

// export default NavigationMap;
import React from "react";
import { MapInteractionCSS } from "react-map-interaction";
import rooms from "../../../types/data";
import { Item } from "../../../types/types";
import RoomBox from "../../atoms/roomBox/roomBox";

const NavigationMap: React.FC = () => {
  // Determine the maximum X and Y coordinates to define the grid size
  const maxX = Math.max(...rooms.map((room) => room.locationX));
  const maxY = Math.max(...rooms.map((room) => room.locationY));

  // Create an empty grid to represent the map layout
  // const mapLayout = Array.from({ length: maxY }, () =>
  //   Array.from({ length: maxX }, () => null)
  // );
  // Initialize the mapLayout grid with undefined values
  const mapLayout: (Item | undefined)[][] = Array.from({ length: maxY }, () =>
    Array.from({ length: maxX }, () => undefined)
  );

  // Place each room in the map layout based on its location
  rooms.forEach((room) => {
    mapLayout[room.locationY - 1][room.locationX - 1] = room;
  });
  return (
    <MapInteractionCSS
      // scale={1}
      // translation={{ x: 0, y: 0 }}
      enableWheel={false}
    >
      {/* Render the RoomBox components within the grid layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${maxX}, 1fr)`,
          gridTemplateRows: `repeat(${maxY}, 1fr)`,
          gap: "10px", // Adjust the gap between cells as needed
        }}
      >
        {mapLayout.map((row, rowIndex) =>
          row.map((room, columnIndex) =>
            room ? (
              <div
                key={room.id}
                style={{
                  gridRow: rowIndex + 1,
                  gridColumn: columnIndex + 1,
                }}
              >
                <RoomBox text={room.name} />
              </div>
            ) : (
              <div key={`${rowIndex}-${columnIndex}`} />
            )
          )
        )}
      </div>
    </MapInteractionCSS>
  );
};

export default NavigationMap;
