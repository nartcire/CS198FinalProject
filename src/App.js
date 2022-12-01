import Board from './Components/Board.jsx';
import "./Styles/App.css"


const App = () => {

  return (
    <div className="page">
      <div className="title">
        <h1>Soda Hall</h1>
        <h2>The Game :: 2022 ed.</h2>
      </div>
      <Board></Board>
    </div>
  );
}

export default App;
