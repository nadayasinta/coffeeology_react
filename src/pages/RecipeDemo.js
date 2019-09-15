import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

// import store
import { connect } from "unistore/react";
import actionsDemo from "../store/actionsDemo";

// import component
import Timer from "../components/timer";
import StepCard from "../components/stepCard";

class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = { steps: [] };
  }

  nextStep = () => {
    let newSteps = this.props.recipeSteps;
    newSteps.shift();
    this.setState({ steps: newSteps });
  };

  componentDidMount() {
    this.setState({ steps: this.props.recipeSteps });
  }

  componentWillUpdate = (prevProps, prevState) => {
    if (prevProps.stepIndex !== this.props.stepIndex) {
      console.log("didUpdate", this.props.stepIndex);

      if (this.props.stepIndex > 0) {
        this.nextStep();
        if (this.state.steps.length === 0) {
          this.props.postHistory({ recipeID: this.props.match.params.recipeID });
          this.props.history.push("/recipe/review/" + this.props.match.params.recipeID);
        }
      }
      if (this.state.steps[0] !== undefined) {
        this.props.setTimer(this.state.steps[0].time * 10);
        this.props.setStepTime(this.state.steps[0].time);
        this.props.setStepWater(this.state.steps[0].amount);
        this.props.setWaterLimit(
          this.state.steps[0].amount + this.props.waterLimit
        );
      }
    }
  };

  render() {
    if (this.state.steps === []) {
      return <div>Loading</div>;
    } else {
      console.log("stepindex", this.props.stepIndex);
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Timer />
              </div>
              <div className="col-12">
                {this.props.recipeSteps.map((recipeStep, index) => {
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
            </div>
          </div>
        </div>
      );
    }
  }
}

// export default Steps;
export default connect(
  "recipeSteps, stepIndex, waterLimit",
  actionsDemo
)(Steps);
