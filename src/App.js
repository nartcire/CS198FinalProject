import Board from './Components/Board.jsx';
import {level} from './Components/Board.jsx'
import "./Styles/App.css"


const App = () => {

  return (
    <div className="page">
      <h1> Soda Hall The Game 2022</h1>
      <h3> Level: {level} </h3>
      <Board></Board>
    </div>
  );
}

export default App;
