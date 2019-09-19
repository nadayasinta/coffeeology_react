import React from "react";

function TimerButton(props) {
  return (
    <div>
      {!props.isRunning ? (
        <button
          type="button"
          className="btn btn-danger"
          onClick={props.onClick}
        >
          Mulai
        </button>
      ) : (
        <button type="button" class="btn btn-danger" onClick={props.onClick}>
          Stop
        </button>
      )}
    </div>
  );
}

export default TimerButton;
