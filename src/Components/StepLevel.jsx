import React from "react";
import "../Styles/StepLevel.css"

const StepLevel = (props) => {
    return(
        <div>
            <div className="levelNum"> Level: {props.levelNum}</div>
            <div className="stepNum"> Steps: {props.numSteps}</div>
        </div>
    );
}

export default StepLevel;