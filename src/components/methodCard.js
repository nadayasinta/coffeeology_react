import React from "react";

function methodCard(props) {
  return (
    <div className="container-fluid methodCard border rounded">
      <div className="row">
        <div className="col-12 text-center px-1 py-3">
          <img src={props.icon} className="w-100" alt="altTag" />
          <h6 className="m-0 pt-3">{props.name}</h6>
        </div>
      </div>
    </div>
  );
}

export default methodCard;
