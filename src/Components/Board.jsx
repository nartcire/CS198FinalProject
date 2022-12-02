import {React, useState, useEffect} from "react";
import Tile from "./Tile.jsx";
import "../Styles/Board.css";
import Counter from "./Counter.jsx";
import FloorCounter from "./FloorCounter.jsx";
import TotalCounter from "./TotalCounter.jsx";
import StepsPerLevel from "./StepsPerLevel.jsx"
import LeaderBoard from "./Leadeboard.jsx"

let level = 1;

const Board = () => {

  //0 - Walls
  //1 - Floors
  //2 - Character
  //3 - Enemy
  //4 - Key
  //5 - Exit
  //6 - CharacterWithKey
  //7 - DamagedCharacter

  const one = 
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 2, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 3, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 1, 3, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 4, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 3, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 5, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];;

  const two = 
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 3, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0],
  [0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 4, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
  [0, 1, 3, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
  [0, 5, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

  const three = 
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 3, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0],
  [0, 4, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 3, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 3, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 5, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

  const four = 
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 5, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 3, 1, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 3, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 4, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 2, 0],
  [0, 3, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];


  let [board, setBoard] = useState(
    one
  );

  let [ourXY, setOurXY] = useState([3, 1]);
  let hasKey = false;
  let beat = false;
  let currentCharacterSprite = 2;
  let [numOfSteps, setNumOfSteps] = useState(0);
  let [totalNumOfSteps, setTotalNumOfSteps] = useState(0);
  let [enemy1XY, setEnemy1XY] = useState([16, 25]);
  let [enemy2XY, setEnemy2XY] = useState([11, 8]);
  let [enemy3XY, setEnemy3XY] = useState([8, 28]);
  let [stepsForLevel1, setStepsForLevel1] = useState(0);
  let [stepsForLevel2, setStepsForLevel2] = useState(0);
  let [stepsForLevel3, setStepsForLevel3] = useState(0);
  let [stepsForLevel4, setStepsForLevel4] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true)
  }, []);

  const detectKeyDown = (e) => {
    console.log("Key Pressed:", e.key);
    moveCharacter(e.key);
  }

  const moveEnemy1 = () => { 
    let currentXY = [];
    currentXY[0] = enemy1XY[0];
    currentXY[1] = enemy1XY[1];
    let choice = Math.floor(Math.random() * 4);

    switch (choice) {
      case 0:
        currentXY[0]--;
        break;
      case 1:
        currentXY[1]++;
        break;
      case 2:
        currentXY[0]++;
        break;
      case 3:
        currentXY[1]--;
        break;
      default:
        console.log("Error with enemy 1 movement");
        break;
    }

    if(isValidEnemyXY(currentXY[0], currentXY[1])) {
      board[enemy1XY[0]][enemy1XY[1]] = 1;
      board[currentXY[0]][currentXY[1]] = 3;
      updateEnemy1XY(currentXY[0], currentXY[1]);
    }
  }

  const moveEnemy2 = () => { 
    let currentXY = [];
    currentXY[0] = enemy2XY[0];
    currentXY[1] = enemy2XY[1];
    let choice = Math.floor(Math.random() * 4);

    switch (choice) {
      case 0:
        currentXY[0]--;
        break;
      case 1:
        currentXY[1]++;
        break;
      case 2:
        currentXY[0]++;
        break;
      case 3:
        currentXY[1]--;
        break;
      default:
        console.log("Error with enemy 2 movement");
        break;
    }

    if(isValidEnemyXY(currentXY[0], currentXY[1])) {
      board[enemy2XY[0]][enemy2XY[1]] = 1;
      board[currentXY[0]][currentXY[1]] = 3;
      updateEnemy2XY(currentXY[0], currentXY[1]);
    }
  }

  const moveEnemy3 = () => { 
    let currentXY = [];
    currentXY[0] = enemy3XY[0];
    currentXY[1] = enemy3XY[1];
    let choice = Math.floor(Math.random() * 4);

    switch (choice) {
      case 0:
        currentXY[0]--;
        break;
      case 1:
        currentXY[1]++;
        break;
      case 2:
        currentXY[0]++;
        break;
      case 3:
        currentXY[1]--;
        break;
      default:
        console.log("Error with enemy 2 movement");
        break;
    }

    if(isValidEnemyXY(currentXY[0], currentXY[1])) {
      board[enemy3XY[0]][enemy3XY[1]] = 1;
      board[currentXY[0]][currentXY[1]] = 3;
      updateEnemy3XY(currentXY[0], currentXY[1]);
    }
  }

  const moveCharacter = (input) => {
    moveEnemy1();
    moveEnemy2();
    moveEnemy3();
    let currentXY = [];
    currentXY[0] = ourXY[0];
    currentXY[1] = ourXY[1];

    switch(input) {
      case "w":
        currentXY[0]--;
        break;
      case "d":
        currentXY[1]++;
        break;
      case "s":
        currentXY[0]++;
        break;
      case "a":
        currentXY[1]--;
        break;
      default:
        console.log("Invalid Key");
        break;
    }

    if (isValidXY(currentXY[0], currentXY[1])) {
      incrementCounters();
      let key = isKey(currentXY[0], currentXY[1]);

      if (key) {
        hasKey = true;
        currentCharacterSprite = 6;
        console.log(hasKey);
      }

      board[ourXY[0]][ourXY[1]] = 1;
      board[currentXY[0]][currentXY[1]] = currentCharacterSprite;
      ourXY[0] = currentXY[0];
      ourXY[1] = currentXY[1];
      updateXY(currentXY[0], currentXY[1]);

      if (isNearSoap()) {
        soapPenalty();
        board[ourXY[0]][ourXY[1]] = 7;
      }

      if (beat) {
        level ++;
        currentCharacterSprite = 2;
        updateXY(currentXY[0], currentXY[1]);
        if (level === 2) {
          updateStepsForLevel1();
          board = two;
          updateBoard(two);
          updateFloor2EnemyXY();
        }
        if (level === 3) {
          updateStepsForLevel2();
          board = three;
          updateFloor3EnemyXY();
          ourXY[0] = 1; 
          ourXY[1] = 17;
          updateXY(1, 17);
          updateBoard(three)
        }
        if (level === 4) {
          updateStepsForLevel3();
          board = four;
          updateFloor4EnemyXY();
          updateBoard(four)
        }
        if (level === 5) {
          updateStepsForLevel4();
          //victory condition after beating 4 levels
        }
        resetCounter();
        console.log(beat);
        beat = false;
        hasKey = false;
        return
      }
    }
    console.log(currentXY);
    console.log(ourXY);
    console.log(hasKey);
    console.log(beat);
  }

  const updateXY = (row, col) => {
    setOurXY([row, col]); 
  }

  const updateBoard = (Board) => {
    setBoard(Board);
  }

  const incrementCounters = () => {
    numOfSteps++;
    totalNumOfSteps++
    setTotalNumOfSteps(totalNumOfSteps);
    setNumOfSteps(numOfSteps);
  }

  const soapPenalty = () => {
    numOfSteps += 5;
    totalNumOfSteps += 5;
    setTotalNumOfSteps(totalNumOfSteps);
    setNumOfSteps(numOfSteps);
  }

  const resetCounter = () => {
    numOfSteps = 0;
    setNumOfSteps(numOfSteps);
  }

  const updateEnemy1XY = (row, col) => {
    enemy1XY[0] = row;
    enemy1XY[1] = col;
    setEnemy1XY(enemy1XY);
  }

  const updateEnemy2XY = (row, col) => {
    enemy2XY[0] = row;
    enemy2XY[1] = col;
    setEnemy2XY(enemy2XY);
  }

  const updateEnemy3XY = (row, col) => {
    enemy3XY[0] = row;
    enemy3XY[1] = col;
    setEnemy3XY(enemy3XY);
  }

  const updateFloor2EnemyXY = () => {
    updateEnemy1XY(2, 35);
    updateEnemy2XY(17, 15);
    updateEnemy3XY(17, 2);
  }

  const updateFloor3EnemyXY = () => {
    updateEnemy1XY(11, 19);
    updateEnemy2XY(17, 4);
    updateEnemy3XY(8, 28);
  }

  const updateFloor4EnemyXY = () => {
    updateEnemy1XY(2, 34);
    updateEnemy2XY(18, 1);
    updateEnemy3XY(5, 20);
  }

  const updateStepsForLevel1 = () => {
    stepsForLevel1 = numOfSteps;
    setStepsForLevel1(stepsForLevel1);
    console.log("steps:", stepsForLevel1)
  }

  const updateStepsForLevel2 = () => {
    stepsForLevel2 = numOfSteps;
    setStepsForLevel2(stepsForLevel2);
  }

  const updateStepsForLevel3 = () => {
    stepsForLevel3 = numOfSteps;
    setStepsForLevel3(stepsForLevel3);
  }

  const updateStepsForLevel4 = () => {
    stepsForLevel4 = numOfSteps;
    setStepsForLevel4(stepsForLevel4);
  }

  const isValidXY = (row, col) => {
    const tileType = board[row][col];
    if (tileType === 0 || tileType === 3) {
      return false;
    } else if (tileType === 5 && !hasKey) {
      return false;
    } else if (tileType === 5 && hasKey) {
      beat = true;
    }

    return true;
  }

  const isValidEnemyXY = (row, col) => {
    const tileType = board[row][col];

    if (tileType === 1) {
      return true;
    } else {
      return false;
    }
  }

  const isKey = (row, col) => {
    const tileType = board[row][col];
    if (tileType === 4) {
      return true;
    } else {
      return false;
    }
  }

  const isNearSoap = () => {
    const row = ourXY[0];
    const col = ourXY[1];

    const left = [row, col - 1];
    const right = [row, col + 1];
    const up = [row - 1, col];
    const down = [row + 1, col];
    const topLeft = [row - 1, col - 1];
    const topRight = [row - 1, col + 1];
    const bottomLeft = [row + 1, col - 1];
    const bottomRight = [row + 1, col + 1];

    if (board[left[0]][left[1]] === 3) {
      return true;
    } else if (board[right[0]][right[1]] === 3) {
      return true;
    } else if (board[up[0]][up[1]] === 3) {
      return true;
    } else if (board[down[0]][down[1]] === 3) {
      return true;
    } else if (board[topLeft[0]][topLeft[1]] === 3) {
      return true;
    } else if (board[topRight[0]][topRight[1]] === 3) {
      return true;
    } else if (board[bottomLeft[0]][bottomLeft[1]] === 3) {
      return true;
    } else if (board[bottomRight[0]][bottomRight[1]] === 3) {
      return true;
    } else {
      return false;
    }
  }

  const convertBoard = () => {
    let result = [];
    let index;

    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
        index = row * board[0].length + col;
        result[index] = board[row][col];
      }
    }

    return result;
  }

  const display = (cBoard) => {
    return cBoard.map((value) => {
      return <Tile num={value}></Tile>
    });
  }

  return (
    <div className="gameWrapper">
      <div className="Counters">
        <FloorCounter levelNum={level}></FloorCounter>
        <Counter numSteps={numOfSteps}></Counter>
        <TotalCounter numSteps={totalNumOfSteps}></TotalCounter>
      </div>
      <div className="board">{display(convertBoard())}</div>
      <div className="bottomGui">
        <StepsPerLevel firstLevel={stepsForLevel1} secondLevel={stepsForLevel2} thirdLevel={stepsForLevel3} fourthLevel={stepsForLevel4}></StepsPerLevel>
        <LeaderBoard></LeaderBoard>
      </div>
    </div>
  );
};

export default Board;