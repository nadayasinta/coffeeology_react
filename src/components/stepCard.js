import React from "react";
import { connect } from "unistore/react";

const convertSeconds = secondsInput => {
  let minutes = Math.floor(parseInt(secondsInput) / 60);
  let seconds = parseInt(secondsInput) - minutes * 60;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

function stepCard(props) {
  return (
    <div className="container-fluid stepCard border">
      <div className="row pt-2">
        <div className="col-2 px-0 text-center align-self-center">
          {props.data.stepNumber}
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-8 ">
              <div className="row">
                <div className="col-3 px-0 text-right align-self-center">
                  <img
                    src={props.stepTypes[props.data.stepNumber].icon}
                    className="w-100"
                    alt="alt tag"
                  />
                </div>
                <div className="col-9 text-left align-self-center">
                  {props.stepTypes[props.data.stepNumber].name}
                </div>
              </div>
            </div>
            <div className="col-4 px-0">
              <div className="row">
                <div className="col-2 px-0">
                  <img
                    src={require("../assets/images/RecipeIcon/timer.png")}
                    className="w-100"
                    alt="alt tag"
                  />
                </div>
                <div className="col-10 px-0 text-left align-self-center">
                  {convertSeconds(props.data.time)}
                </div>
              </div>
            </div>
          </div>
          {props.data.amount !== 0 ? (
            <div className="row">
              <div className="col-1 px-0">
                <img
                  src={require("../assets/images/RecipeIcon/water.png")}
                  className="w-100"
                  alt="alt tag"
                />
              </div>
              <div className="col-11 px-0 text-left align-self-center">
                {props.beanRatio * props.data.amount}
              </div>
            </div>
          ) : (
            <div />
          )}

          <div className="row">
            <div className="col-1 px-0">
              <img
                src={require("../assets/images/RecipeIcon/writing.png")}
                className="w-100"
                alt="alt tag"
              />
            </div>
            <div className="col-11 px-0 text-left align-self-center">
              {props.data.note}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default connect("stepTypes, beanRatio")(stepCard);
