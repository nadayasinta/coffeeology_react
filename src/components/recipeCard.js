import React from "react";

function recipeCard(props) {
  return (
    <div className="container-fluid recipeCard overlaycontainer border shadow-sm rounded my-3 pt-3 overlay">
      <div className="overlay">
        <div className="row h-100 content-image">
          <div className="col-3 align-top text-right">
            <img
              src={props.methodIcon}
              className="w-100 bgcolor2 rounded-circle p-2"
              alt="alt tag"
            />
          </div>
          <div className="col-9 align-self-center text-left">
            <div className="row">
              <h3 className="mb-0">{props.data.name.toUpperCase()}</h3>
            </div>
            {props.pageType === "pageMyBrew" ? (
              <div className="row pb-1">
                <h6 className="mb-0">
                  Dibuat : {props.data.createdAt.slice(0, -14)}
                </h6>
              </div>
            ) : (
              <div />
            )}
            <div className="row">
              <div className="col-3 align-text-top px-0 py-0">
                {[1, 2, 3, 4, 5].map(number =>
                  number <= Math.round(props.data.rating) ? (
                    <img
                      src={require("../assets/images/RecipeIcon/star1.png")}
                      className="starrating"
                      alt="alt tag"
                    />
                  ) : (
                    <img
                      src={require("../assets/images/RecipeIcon/star0.png")}
                      className="starrating"
                      alt="alt tag"
                    />
                  )
                )}
              </div>
              <div className="col-3 align-self-center text-left pl-1">
                [{props.data.rating}]
              </div>
              <div className="col-6 align-self-center text-center pl-2 pt-1">
                <h6 className="bgcolor1 text-light rounded py-1 mb-0">
                  Diseduh : {props.data.brewCount} x
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-3">
          <div className="col-3"></div>
          <div className="col-9 px-0">
            <div className="row">
              <div className="col-3 text-left">
                <h6>Beans</h6>
              </div>
              <div className="col-1 text-left">
                <h6>:</h6>
              </div>
              <div className="col-7 text-left">
                <h6>{props.data.beanName}</h6>
              </div>
              <div className="col-3 text-left">
                <h6>Process</h6>
              </div>
              <div className="col-1 text-left">
                <h6>:</h6>
              </div>
              <div className="col-7 text-left">
                <h6>{props.data.beanProcess}</h6>
              </div>
              <div className="col-3 text-left">
                <h6>Roasting</h6>
              </div>
              <div className="col-1 text-left">
                <h6>:</h6>
              </div>
              <div className="col-7 text-left">
                <h6>{props.data.beanRoasting}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-light border py-2">
          <div className="col-4 text-center px-0">
            <img
              src={require("../assets/images/RecipeIcon/time.png")}
              className="w-25 mr-1"
              alt="alt tag"
            />
            <span className="text-muted"> {props.time} </span>
          </div>
          <div className="col-4 text-center px-0">
            <img
              src={require("../assets/images/RecipeIcon/bean.png")}
              className="w-25 mr-1"
              alt="alt tag"
            />
            <span className="text-muted"> {props.data.coffeeWeight} </span>
          </div>
          <div className="col-4 text-center px-0">
            <img
              src={require("../assets/images/RecipeIcon/amount.png")}
              className="w-25 mr-1"
              alt="alt tag"
            />
            <span className="text-muted"> {props.data.water} </span>
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="text">Demo</div>
      </div>
    </div>
  );
}

export default recipeCard;
