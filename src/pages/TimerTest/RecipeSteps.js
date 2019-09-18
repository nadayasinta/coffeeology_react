import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import StepCard from "../../components/stepCard";
import { connect } from "unistore/react";
import actionsDemo from "../../store/actionsDemo";

function RecipeSteps(props) {
  //   console.log(props.recipeSteps);
  return (
    <div className="col-12">
      {props.recipeSteps.slice(props.startIndex).map((recipeStep, index) => {
        return (
          <div>
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
  "recipeSteps",
  actionsDemo
)(RecipeSteps);
