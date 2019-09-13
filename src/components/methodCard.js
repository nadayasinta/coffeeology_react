import React from 'react';

function methodCard(props) {
  return (
      <div className="container-fluid methodCard border">
          <div className="row h-100">
              <div className="col-12 text-center">
                  <img src={props.icon} className="w-100" alt="alt tag"/>
                  <h6>{props.name}</h6>
                </div>
            </div>
        </div>
  );
}

export default methodCard;
