import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import { CSSTransitionGroup } from "react-transition-group";
import StepCard from "../components/stepCard";
import { connect } from "unistore/react";
import actionsDemo from "../store/actionsDemo";

function Timer(props) {
  return (
    <h1>
      Time : {Math.floor(Math.floor(props.timerNow / 10) / 60)}.{" "}
      {Math.floor(props.timerNow / 10) % 60}. {props.timerNow % 10}{" "}
    </h1>
  );
}

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

function RecipeSteps(props) {
  console.log(props);
  return (
    <div className="col-12">
      {props.recipeSteps.map((recipeStep, index) => {
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
connect(
  "recipeSteps",
  actionsDemo
)(RecipeSteps);

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Counter;
