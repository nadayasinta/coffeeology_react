import React from "react";

function Timer(props) {
    return (
        <h1>
            Time : {Math.floor(Math.floor(props.timerNow / 10) / 60)}.{" "}
            {Math.floor(props.timerNow / 10) % 60}. {props.timerNow % 10}{" "}
        </h1>
    );
}

export default Timer;
