import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { connect } from "unistore/react";
import actionsDemo from "../../store/actionsDemo";
function WaterBar(props) {
  return (
    <div>
      {props.waterNow === props.recipeSteps[props.index].amount ? (
        <span></span>
      ) : (
        <ProgressBar
          animated
          variant="info"
          now={
            props.waterNow === props.recipeSteps[props.index].amount
              ? 0
              : props.waterNow
          }
          max={props.recipeSteps[props.index].amount}
        />
      )}
    </div>
  );
}

export default connect(
  "recipeSteps",
  actionsDemo
)(WaterBar);
