import React from 'react';
import "../Styles/Entry.css"

const Entry = (props) => {
    return(
        <div className="entry">
            <div>{props.pos}. {props.name}</div>
            <div>{props.score}</div>
        </div>
    )
}

export default Entry;