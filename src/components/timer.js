import React from 'react';
import { connect } from 'unistore/react';
import { actionsTimerTime } from '../store/store';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'a',
		};
	}

	componentDidMount() {
		// this.props.setTimerTime(this.props.startCount);
		console.log('new');
		this.doIntervalChange();
	}

	componentWillUnmount() {
		console.log('unmount');
		clearInterval(this.myInterval);
	}

	doIntervalChange = () => {
		this.myInterval = setInterval(() => {
			this.props.setTimerTime(this.props.timerNow === 0 ? 0 : this.props.timerNow - 1);
		}, 100);
	};

	setStatusStart = event => {
		this.setState({ status: 'stars' }, console.log(this.state.status));
	};
	render() {
		return (
			<div>
				<h1>
					Time : {Math.floor(Math.floor(this.props.timerNow / 10) / 60)}.{' '}
					{Math.floor(this.props.timerNow / 10) % 60}. {this.props.timerNow % 10}{' '}
				</h1>
			</div>
		);
	}
}

export default connect(
	'timerNow',
	actionsTimerTime
)(Timer);
