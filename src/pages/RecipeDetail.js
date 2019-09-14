import React from "react";

// import store
import { connect } from "unistore/react";
import actionsRecipes from "../store/actionsRecipes";

// import component
import StepCard from "../components/stepCard";
import Navbar from "../components/navbar";

// import components
import Radar from "../components/radar";

import loading from "../assets/images/loading.gif";

class RecipeSelection extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getRecipeByID(this.props.match.params.recipeID);
    console.log(this.props.recipe);
  }
  convertSeconds(secondsInput) {
    let minutes = Math.floor(parseInt(secondsInput) / 60);
    let seconds = parseInt(secondsInput) - minutes * 60;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  handleOnClickButton(event) {
    event.preventDefault();
  }

  render() {
    console.log(this.props.recipeDetails);
    if (this.props.recipe === null) {
      return <img src={loading} alt="loading..." />;
    } else {
      return (
        <div>
          <div className="container">
            <div className="row mx-0 mt-3">
              <div className="col-4 text-left">
                <img
                  height="100px"
                  src={require("../assets/images/methodV60.png")}
                />
              </div>
              <div className="col-6 text-left">
                <div className="row">
                  <div className="col-12">{this.props.recipe.name}</div>
                  <div className="col-12">
                    <img
                      width="20px"
                      src={require("../assets/images/RecipeIcon/timer.png")}
                      alt="timer"
                    />
                    <span>{this.convertSeconds(this.props.recipe.time)}</span>
                  </div>
                </div>
              </div>
              <div className="col-2">...</div>
            </div>
            <div className="row mx-0 mt-3">
              <div className="col-2 px-0">
                <img
                  width="20px"
                  src={require("../assets/images/RecipeIcon/coffee-grain.png")}
                  alt="coffee-grain"
                />
                <span> : </span>
                <img
                  width="20px"
                  src={require("../assets/images/RecipeIcon/raindrop.png")}
                  alt="raindrop"
                />
              </div>
              <div className="col-2 px-0">
                {this.props.recipe.coffeeWeight} : {this.props.recipe.water}
              </div>
              <div className="col-2 px-0">
                <img
                  width="20px"
                  src={require("../assets/images/RecipeIcon/coffee-grinder.png")}
                  alt="coffee-grinder"
                />
              </div>
              <div className="col-2 px-0">
                {this.props.recipeDetails.grindSize}
              </div>
              <div className="col-2 px-0">
                <img
                  width="20px"
                  src={require("../assets/images/RecipeIcon/thermometer.png")}
                  alt="thermometer"
                />
              </div>
              <div className="col-2 px-0">
                {this.props.recipeDetails.waterTemp}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <div className="form-group row">
                  <label
                    htmlFor="coffeeBrewInput"
                    className="col-2 col-form-label"
                  >
                    <img
                      width="20px"
                      src={require("../assets/images/RecipeIcon/coffee.png")}
                      alt="coffee"
                    />
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control"
                      type="number"
                      value={this.props.recipe.coffeeWeight}
                      id="coffeeBrewInput"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-2 form-label">
                    <img
                      width="20px"
                      src={require("../assets/images/RecipeIcon/water.png")}
                      alt="water"
                    />
                  </div>
                  <div className="col-10">
                    <div className="form-control text-left">
                      {this.props.waterLimit}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-4 text-left pt-2 pr-0">Beans : </div>
              <div className="col-8 text-left pt-2 pl-0">
                {this.props.recipe.beanName}
              </div>
              <div className="col-4 text-left pt-2 pr-0">Process : </div>
              <div className="col-8 text-left pt-2 pl-0">
                {this.props.recipe.beanProcess}
              </div>
              <div className="col-4 text-left pt-2 pr-0">Roasting : </div>
              <div className="col-8 text-left pt-2 pl-0">
                {this.props.recipe.beanRoasting}
              </div>
            </div>

            <Radar data={this.props.recipeDetails} />
            <div className="row mt-3">
              <div className="col-12 text-left">Catatan</div>
              <div className="col-12 text-left">
                {this.props.recipeDetails.note}
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-12">Tahapan</div>
              {this.props.recipeSteps.map(recipeStep => (
                <div className="col-12">
                  <StepCard data={recipeStep} />
                </div>
              ))}
              <div className="col-6 my-3">
                <button
                  type="button"
                  className="btn btn-danger btn-block"
                  onClick={e => {
                    this.props.history.push("/recipedemo");
                  }}
                >
                  Mulai
                </button>
              </div>
            </div>
            <Navbar />
          </div>
        </div>
      );
    }
  }
}

export default connect(
  "recipe,stepTypes,recipeDetails, recipeSteps, waterLimit",
  actionsRecipes
)(RecipeSelection);
