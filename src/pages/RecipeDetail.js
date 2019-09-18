import React from "react";
import { Modal, ButtonToolbar, Button } from "react-bootstrap";
// import store
import { connect } from "unistore/react";
import actionsRecipes from "../store/actionsRecipes";

// import component
import StepCard from "../components/stepCard";

// import components
import Radar from "../components/radar";
import Disqus from "disqus-react";

import loading from "../assets/images/loading.gif";

class RecipeSelection extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      coffeeweight: 0,
      water: 0,
      ratio: 0,
      recipeSteps: []
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }
  //
  async componentDidMount() {
    await this.props.getRecipeByID(this.props.match.params.recipeID);
    await this.setState({
      coffeeweight: this.props.recipe.coffeeWeight,
      water: this.props.recipe.water,
      ratio: this.props.recipe.water / this.props.recipe.coffeeWeight,
      recipeSteps: this.props.recipeSteps
    });
    // this.props.setRecipeSteps(this.state.recipeSteps);
    this.props.setResetTimer();
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

  handleOnClickButton = event => {
    event.preventDefault();
    this.props.setRecipeSteps(this.state.recipeSteps);

    this.props.history.push("/recipe/demo/" + this.props.match.params.recipeID);
  };

  handleOnChangeCoffee = event => {
    event.preventDefault();

    const waterTotal = this.state.ratio * event.target.value;

    const recipeSteps = [];

    this.state.recipeSteps.forEach(recipeStep => {
      recipeStep["amount"] =
        (recipeStep["amount"] / this.state.water) * waterTotal;
      recipeSteps.push(recipeStep);
    });

    this.setState({
      coffeeWeight: event.target.value,
      water: event.target.value * this.state.ratio,
      recipeSteps: recipeSteps
    });
  };

  render() {
    if (this.props.recipe === null) {
      return <img src={loading} alt="loading..." />;
    } else {
      const disqusShortname = "coffeology"; //found in your Disqus.com dashboard
      const disqusConfig = {
        url: "http://localhost:3000/recipe/" + this.props.match.params.recipeID, //this.props.pageUrl
        identifier: this.props.match.params.recipeID, //this.props.uniqueId
        title: "Title of Your Article" + this.props.match.params.recipeID //this.props.title
      };
      return (
        <div>
          <img
            className="backbutton"
            src={this.props.backButton}
            onClick={event => this.props.history.goBack()}
          />
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
                      id="coffeeBrewInput"
                      defaultValue={this.props.recipe.coffeeWeight}
                      onChange={this.handleOnChangeCoffee}
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
                      {this.state.water}
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
            <ButtonToolbar>
              <Button bsStyle="primary" onClick={this.handleShow}>
                <Disqus.CommentCount
                  shortname={disqusShortname}
                  config={disqusConfig}
                >
                  Comments
                </Disqus.CommentCount>
              </Button>

              <Modal
                {...this.props}
                show={this.state.show}
                onHide={this.handleHide}
                dialogClassName="custom-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-lg">
                    Comment
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Disqus.DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleHide}>Close</Button>
                </Modal.Footer>
              </Modal>
            </ButtonToolbar>
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
                  onClick={this.handleOnClickButton}
                >
                  Mulai
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  "recipe, stepTypes, recipeDetails, recipeSteps, waterLimit, backButton",
  actionsRecipes
)(RecipeSelection);
