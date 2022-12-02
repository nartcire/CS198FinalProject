import {React, useState, useEffect} from 'react';
import "../Styles/Leaderboard.css"
import Entry from "./Entry.jsx"
import axios from 'axios'


const Leaderboard = (props) => {
    const [data, setData] = useState();

    const getLeaderboard = () => {
        axios
            .get('http://localhost:4000/user/leaderboard')
            .then((data) => setData(data.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getLeaderboard();
      }, []);
      
    return(
        <div className="leaderBoard">
            <div className="leaderboardTitle">HALL OF FAME</div>
            <div className="scores">
                <div className='scoreTitle'>
                    <div>Name</div>
                    <div>Total Steps</div>
                </div>
                {
                    data && data.slice(0, 7).map((d) => {
                        return <Entry name={d.username} score={d.score} />
                    })
                }
            </div>
        </div>
    );
}

export default Leaderboard;