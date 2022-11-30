import React from "react";
import "../Styles/Tile.css";
import Player from "../Styles/Sprites/Player.png";
import Enemy from "../Styles/Sprites/Bar.png";
import Key from "../Styles/Sprites/Key.png";
import Wall from "../Styles/Sprites/Wall.png";
import Floor from "../Styles/Sprites/Floor.png";
import PlayerKey from "../Styles/Sprites/PlayerWithKey.png"
import PlayerDamage from "../Styles/Sprites/PlayerDamage.png"


const Tile = (props) => {

  const tileType = (tileNumber) => {
    switch(tileNumber) {
      case 0:
        return Wall;
      case 1:
        return Floor;
      case 2:
        return Player
      case 3:
        return Enemy;
      case 4:
        return Key;
      case 5:
        return Enemy;
      case 6:
        return PlayerKey;
      case 7:
        return PlayerDamage;
      default:
        return Wall;
    }
  }

  //return <div className={tileType(props.num)} id="tile"></div>;
  return <img src={tileType(props.num)} alt="Tile" id="tile"/>;
};

export default Tile;
