import React from "react";
import "../Styles/Tile.css";

const Tile = (props) => {

  const tileType = (tileNumber) => {
    switch(tileNumber) {
      case 0:
        return "Wall";
      case 1:
        return "Floor";
      case 2:
        return "Character";
      case 3:
        return "Enemy";
      case 4:
        return "Key";
      case 5:
        return "Exit";
      default:
        return "Wall";
    }
  }

  return <div className={tileType(props.num)} id="tile"></div>;
};

export default Tile;
