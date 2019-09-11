import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'unistore/react';
import { actionsTimerTime } from '../store/store';

// import component
import Timer from '../components/timer';

class Steps extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: ['hello', 'world', 'click', 'me'], steps: [] };
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd() {
		const newItems = this.state.items.concat([prompt('Enter some text')]);
		this.setState({ items: newItems });
	}

	handleRemove(i) {
		let newItems = this.state.items.slice();
		newItems.splice(i, 1);
		this.setState({ items: newItems });
	}

	nextStep() {
		let newSteps = this.state.steps;
		newSteps.shift();
		this.setState({ steps: newSteps });
	}

	componentDidMount() {
		this.setState({ steps: this.props.steps });
	}

	componentDidUpdate = (prevProps, prevState) => {
		if (prevProps.stepIndex !== this.props.stepIndex) {
			this.props.setTimerTime(this.props.steps[this.props.stepIndex].time);
			if (this.props.stepIndex > 0) {
				this.nextStep();
			}
		}
	};
	render() {
		const items = this.state.items.map((item, i) => (
			<div key={item} onClick={() => this.handleRemove(i)}>
				{item}
			</div>
		));

		return (
			<div>
				<Timer />
				<button onClick={this.handleAdd}>Add Item</button>

				{this.props.steps.map((value, index) => {
					return (
						<div>
							<CSSTransitionGroup
								transitionName="example"
								transitionEnterTimeout={500}
								transitionLeaveTimeout={300}
							>
								<div>
									{value.name} dan {value.time}
								</div>
							</CSSTransitionGroup>
						</div>
					);
				})}
				{items}
			</div>
		);
	}
}

// export default Steps;
export default connect(
	'steps, stepIndex',
	actionsTimerTime
)(Steps);
