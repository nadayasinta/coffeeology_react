import React from "react";

function Timer(props) {
  return (
    <div>
      <span className="timerminute">
        {Math.floor(Math.floor(props.timerNow / 10) / 60)}:{" "}
        {Math.floor(props.timerNow / 10) % 60}
      </span>
      <span className="timersecond"> : {props.timerNow % 10} </span>
    </div>
  );
}

export default Timer;
