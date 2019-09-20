import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import StepCard from "../../components/stepCard";
import { connect } from "unistore/react";
import actionsDemo from "../../store/actionsDemo";

function RecipeSteps(props) {
  //   console.log(props.recipeSteps);
  return (
    <div className="col-12">
      <div className="container-fluid recipeStepNow">
        <div className="row">
          <div className="col-12">
            <h5 className="mb-0">
              {props.stepTypes[props.stepNow.stepTypeID].name.toUpperCase()}
            </h5>
            <div className="col-12">
              <h6 className="text-secondary">{props.stepNow.note}</h6>
            </div>
          </div>
        </div>
      </div>
      {props.recipeSteps.slice(props.Index + 1).map((recipeStep, index) => {
        return (
          <div key={index}>
            <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              <div>
                <StepCard data={recipeStep} />
              </div>
            </CSSTransitionGroup>
          </div>
        );
      })}
    </div>
  );
}
export default connect(
  "stepTypes, recipeSteps",
  actionsDemo
)(RecipeSteps);
