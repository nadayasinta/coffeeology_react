import React from "react";

function historyCard(props) {
  return (
    <div className="container-fluid recipeCard border mt-3">
      <div className="row h-100 pt-2">
        <div className="col-4">
          <div>
            <img className="w-100" src={props.icon} alt="alt tag" />
          </div>
        </div>
        <div className="col-8" style={{ textAlign: "left" }}>
          <h4>{props.data.name}</h4>
          <h6> Bean : {props.data.beanName}</h6>
          <h6> {props.data.createdAt.slice(0,-9)} </h6>
        </div>
      </div>
    </div>
  );
}

export default historyCard;
