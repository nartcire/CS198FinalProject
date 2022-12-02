import React from 'react';
import "../Styles/Entry.css"

const Entry = (props) => {
    return(
        <div className="entry">
            <div>{props.name}</div>
            <div>{props.score}</div>
        </div>
    )
}

export default Entry;