import React from "react";

// import store
import { connect } from "unistore/react";
import actionsTimer from "../store/actionsTimer";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Start"
    };
  }

  changeTimerInterval = () => {
    this.timerInterval = setInterval(() => {
      this.props.setTimer(
        this.props.timerNow === 0 ? 0 : this.props.timerNow - 1
      );
    }, 100);
  };

  stopTimerInterval = () => {
    clearInterval(this.timerInterval);
  };

  changeAmountInterval = () => {
    clearInterval(this.amountInterval);
    this.amountInterval = setInterval(() => {
      this.props.setWaterNow(
        this.props.waterNow === this.props.waterLimit
          ? this.props.waterNow
          : this.props.waterNow + this.props.stepWater / this.props.stepTime
      );
      console.log(this.props.stepWater / this.props.stepTime);
    }, 100);
  };

  stopAmountInterval = () => {
    clearInterval(this.amountInterval);
  };

  startTimer = () => {
    this.setState({ status: "Pause" }, () => {
      this.changeTimerInterval();
      this.changeAmountInterval();
    });
  };

  pauseTimer = () => {
    this.setState({ status: "Resume" }, () => {
      this.stopTimerInterval();
      this.stopAmountInterval();
    });
  };

  skipStep = () => {
    this.setState({ status: "Resume" }, () => {
      this.stopTimerInterval();
      this.stopAmountInterval();
    });
  };

  render() {
    return (
      <div>
        <h1>
          Time : {Math.floor(Math.floor(this.props.timerNow / 10) / 60)}.{" "}
          {Math.floor(this.props.timerNow / 10) % 60}.{" "}
          {this.props.timerNow % 10}{" "}
        </h1>
        {this.state.status !== "Pause" ? (
          <button
            type="button"
            class="btn btn-danger"
            onClick={this.startTimer}
          >
            {this.state.status}
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-danger"
            onClick={this.pauseTimer}
          >
            {this.state.status}
          </button>
        )}
        <button
          type="button"
          class="btn btn-warning"
          onClick={() => {
            this.props.setTimer(0);
            this.props.setWaterNow(this.props.waterLimit);
          }}
        >
          Skip
        </button>
        <h1>Water : {Math.ceil(this.props.waterNow)} </h1>
      </div>
    );
  }
}

export default connect(
  "timerNow, waterNow,waterLimit,stepWater,stepTime",
  actionsTimer
)(Timer);
