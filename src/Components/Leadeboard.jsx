import React from 'react';
import "../Styles/Leaderboard.css"
import Entry from "./Entry.jsx"

const Leaderboard = (props) => {
    return(
        <div className="leaderBoard">
            <div className="leaderboardTitle">HALL OF FAME</div>
            <div className="scores">
                <div className='scoreTitle'>
                    <div>Name</div>
                    <div>Total Steps</div>
                </div>
                <Entry pos={1} name={"Eric"} score={2000}></Entry>
                <Entry pos={2} name={"Randy"} score={4000}></Entry>
                <Entry pos={3} name={"Kihyun"} score={9000}></Entry>
                <Entry pos={4} name={"Willow"} score={9001}></Entry>
                <Entry pos={5} name={"Abdul"} score={100000}></Entry>

            </div>
        </div>
    );
}

export default Leaderboard;