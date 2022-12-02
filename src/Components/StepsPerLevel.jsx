import React from "react";
import "../Styles/StepsPerLevel.css";
import StepLevel from "./StepLevel.jsx"

const StepsPerLevel = (props) => {

    return(
        <div className="levelStepDisplay">
            <div className="levelStepTitle">STEPS PER LEVEL</div>
            <div className="levelNumWrapper">
                <StepLevel levelNum={1} numSteps={props.firstLevel}></StepLevel>
                <StepLevel levelNum={2} numSteps={props.secondLevel}></StepLevel>
                <StepLevel levelNum={3} numSteps={props.thirdLevel}></StepLevel>
                <StepLevel levelNum={4} numSteps={props.fourthLevel}></StepLevel>
            </div>
        </div>
    ); 
}

export default StepsPerLevel;