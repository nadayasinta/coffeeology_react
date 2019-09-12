import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'unistore/react';
import { actionsTimerTime } from '../store/store';

// import component
import Timer from '../components/timer';
import StepCard from '../components/stepCard';

class Steps extends React.Component {
	constructor(props) {
		super(props);
		this.state = { steps: [] };
	}

	nextStep() {
		let newSteps = this.state.steps;
		newSteps.shift();
		this.setState({ steps: newSteps });
	}

	componentDidMount() {
		this.setState({ steps: this.props.recipeSteps });
	}

	componentWillUpdate = (prevProps, prevState) => {
		if (prevProps.stepIndex !== this.props.stepIndex) {
			console.log('didUpdate', this.props.stepIndex);
			if (this.props.stepIndex > 0) {
				this.nextStep();
			}
			if (this.state.steps !== []) {
				this.props.setTimerTime(this.state.steps[0].time);
			}
			// this.props.setTimerTime(this.props.recipeSteps[this.props.stepIndex].time);
		}
	};
	render() {
		if (this.state.steps === []) {
			return <div>Loading</div>;
		} else {
			console.log('stepindex', this.props.stepIndex);
			return (
				<div>
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
				</div>
			);
		}
	}
}

// export default Steps;
export default connect(
	'recipeSteps, stepIndex',
	actionsTimerTime
)(Steps);
