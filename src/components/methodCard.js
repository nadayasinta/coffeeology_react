import React from 'react';

function methodCard(props) {
  return (
    <div className="container-fluid methodcard border rounded-lg">
      <div className="row">
        <div className="col-12   text-center px-2 py-1">
          <img src={props.icon} className="w-100 mb-2" alt="altTag" />
          <div className=" methodname align-content-center m-auto text-center">
            <h6 className="m-0">{props.name}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default methodCard;
