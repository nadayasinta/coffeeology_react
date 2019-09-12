import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { connect } from "unistore/react";
import { actionsTimer } from "../store/store";

// import component
import Header from "../components/header";
import Timer from "../components/timer";
import StepCard from "../components/stepCard";
import Navbar from "../components/navbar";

class Steps extends React.Component {
    constructor(props) {
        super(props);
        this.state = { steps: [] };
    }

    nextStep() {
        let newSteps = this.props.recipeSteps;
        newSteps.shift();
        this.setState({ steps: newSteps });
    }

    componentDidMount() {
        this.setState({ steps: this.props.recipeSteps });
    }

    componentWillUpdate = (prevProps, prevState) => {
        if (prevProps.stepIndex !== this.props.stepIndex) {
            console.log("didUpdate", this.props.stepIndex);

            if (this.props.stepIndex > 0) {
                this.nextStep();
                if (this.state.steps.length === 0) {
                    this.props.history.push("/");
                }
            }
            if (this.state.steps[0] !== undefined) {
                this.props.setTimer(this.state.steps[0].time);
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
                    <Header />

                    <Timer />

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
                    <Navbar />
                </div>
            );
        }
    }
}

// export default Steps;
export default connect(
    "recipeSteps, stepIndex,waterLimit",
    actionsTimer
)(Steps);
