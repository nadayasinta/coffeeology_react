import React from "react";

function myBrewCard(props) {

  return (
    <div className="container-fluid recipeCard border mt-3">
      <div className="row h-100 pt-2">
        <div className="col-3 text-center">
          <img src={props.icon} className="w-100" alt="alt tag" />
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-9 text-left">
              <h4>{props.data.name}</h4>
            </div>
            <div className="col-3 text-right">
              <h5>...</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-2 text-right align-self-center px-0">
              {props.time0}
            </div>
            <div className="col-2 text-left pr-0 pl-1">
              <img
                src={require("../assets/images/RecipeIcon/timer.png")}
                className="w-75"
                alt="alt tag"
              />
            </div>
            <div className="col-2 text-right align-self-center px-0">
              {props.data.coffeeWeight}
            </div>
            <div className="col-2 text-left pr-0 pl-1">
              <img
                src={require("../assets/images/RecipeIcon/coffee.png")}
                className="w-75"
                alt="alt tag"
              />
            </div>
            <div className="col-2 text-right align-self-center px-0">
              {props.data.water}
            </div>
            <div className="col-2 text-left pr-0 pl-1">
              <img
                src={require("../assets/images/RecipeIcon/water.png")}
                className="w-75"
                alt="alt tag"
              />
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-5 text-left">
              <h6>Beans :</h6>
            </div>
            <div className="col-7 text-left">
              <h6>{props.data.beanName}</h6>
            </div>
            <div className="col-5 text-left">
              <h6>Process :</h6>
            </div>
            <div className="col-7 text-left">
              <h6>{props.data.beanProcess}</h6>
            </div>
            <div className="col-5 text-left">
              <h6>Roasting :</h6>
            </div>
            <div className="col-7 text-left">
              <h6>{props.data.beanRoasting}</h6>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row h-100">
            <div className="col-12 h-50">
              <div className="row align-items-center h-100">
                <div className="col-6 text-right px-0">
                  <img
                    src={require("../assets/images/RecipeIcon/star.png")}
                    className="w-50"
                    alt="alt tag"
                  />
                </div>
                <div className="col-6 text-center px-0">
                  {props.data.rating}
                </div>
              </div>
            </div>

            <div className="col-12 h-50">
              <div className="row align-items-center h-100">
                <div className="col-6 text-right px-0">
                  <img
                    src={require("../assets/images/RecipeIcon/like.png")}
                    className="w-50"
                    alt="alt tag"
                  />
                </div>
                <div className="col-6 text-center px-0">
                  {props.data.favoriteCount}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default myBrewCard;
