import React from "react";
import { Modal, ButtonToolbar, Button } from "react-bootstrap";
// import store
import { connect } from "unistore/react";
import actionsRecipes from "../store/actionsRecipes";

// import component
import StepCard from "../components/stepCard";
import ReviewCard from "../components/ReviewCard";

// import components
import Radar from "../components/radar";
import Disqus from "disqus-react";

import loading from "../assets/images/loading.gif";

class RecipeSelection extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showComment: false,
      showReview: false,
      coffeeweight: 0,
      water: 0,
      ratio: 0,
      recipeSteps: []
    };
  }

  handleShowComment = () => {
    this.setState({ showComment: true });
  };

  //

  handleHideComment = () => {
    this.setState({ showComment: false });
  };

  handleShowReview = async () => {
    this.props.getReview({ recipeID: this.props.match.params.recipeID });
    console.log("inininini", this.props.reviews);
    this.setState({ showReview: true });
  };

  handleHideReview = () => {
    this.setState({ showReview: false });
  };

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

    if (sessionStorage.getItem("token") !== null) {
      this.props.getProfile();
    }
    console.log("id user", this.props.userMe.id);
    console.log("id user resep", this.props.recipe.userID);
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
          {this.props.userMe.id === this.props.recipe.userID ? (
            <div align="right">
            <button
              onClick={e => {
                e.preventDefault();
                this.props.history.push(
                  `/recipe/edit/${this.props.recipe.userID}`
                );
              }}
              type="button"
              className="btn btn-secondary btn-sm"
            >
              Edit
            </button>

            </div>
          ) : (
            <div></div>
          )}
          <div className="container">
            <div className="row justify-content-center">
              <h2>{this.props.recipe.name.toUpperCase()}</h2>
              <br />
              <h5>{this.props.recipeCreator.name}</h5>
            </div>

            <div className="row mr-0">
              <div className="col-4 text-right">
                <img
                  className="w-75 bgcolor2"
                  src={this.props.methods[this.props.recipe.methodID - 1].icon}
                />
              </div>
              <div className="col-8 align-self-center">
                <div className="row">
                  <div className="col-4 text-left">Beans</div>
                  <div className="col-1 text-center">:</div>
                  <div className="col-6 text-left">
                    {this.props.recipe.beanName}
                  </div>
                  <div className="col-4 text-left">Process</div>
                  <div className="col-1 text-center">:</div>
                  <div className="col-6 text-left">
                    {this.props.recipe.beanProcess}
                  </div>
                  <div className="col-4 text-left">Roasting</div>
                  <div className="col-1 text-center">:</div>
                  <div className="col-6 text-left">
                    {this.props.recipe.beanRoasting}
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center pt-3">
              <div className="col-4  text-center">
                <div className="row justify-content-center">Waktu</div>
                <div className="row justify-content-center">
                  <img
                    className="w-25 mr-1"
                    src={require("../assets/images/RecipeIcon/timer.png")}
                    alt="alt tag"
                  />
                  <span>{this.convertSeconds(this.props.recipe.time)}</span>
                </div>
              </div>
              <div className="col-4 text-center">
                <div className="row justify-content-center">Suhu Air</div>
                <div className="row justify-content-center">
                  <img
                    className="w-25 mr-1"
                    src={require("../assets/images/RecipeIcon/thermometer.png")}
                    alt="alt tag"
                  />
                  <span>{this.props.recipeDetails.waterTemp}</span>
                </div>
              </div>
              <div className="col-4 text-center">
                <div className="row justify-content-center">Grind</div>
                <div className="row justify-content-center">
                  <img
                    className="w-25 mr-1"
                    src={require("../assets/images/RecipeIcon/coffee-grinder.png")}
                    alt="alt tag"
                  />
                  <span>{this.props.recipeDetails.grindSize}</span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-1">
                <img
                  width="20px"
                  src={require("../assets/images/RecipeIcon/coffee-grain.png")}
                  alt="coffee-grain"
                />
              </div>
              <div className="col-5">
                <div className="row">kopi</div>
                <div className="row">{this.props.recipe.coffeeWeight}</div>
              </div>
              <div className="col-5">
                <div className="row">air</div>
                <div className="row">{this.props.recipe.water}</div>
              </div>
              <div className="col-1">
                <img
                  width="20px"
                  src={require("../assets/images/RecipeIcon/raindrop.png")}
                  alt="raindrop"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <input
                  className="form-control"
                  type="number"
                  id="coffeeBrewInput"
                  defaultValue={this.props.recipe.coffeeWeight}
                  onChange={this.handleOnChangeCoffee}
                />
              </div>
              <div className="col-6">
                <div className="form-control text-left">{this.state.water}</div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 text-left">Catatan</div>
              <div className="col-12 text-left">
                {this.props.recipeDetails.note}
              </div>
            </div>

            <div className="row">
              <Radar data={this.props.recipeDetails} />
            </div>

            <div className="row">
              <div className="col-6">
                <ButtonToolbar>
                  <Button bsStyle="primary" onClick={this.handleShowComment}>
                    <Disqus.CommentCount
                      shortname={disqusShortname}
                      config={disqusConfig}
                    >
                      Comments
                    </Disqus.CommentCount>
                  </Button>

                  <Modal
                    {...this.props}
                    show={this.state.showComment}
                    onHide={this.handleHideComment}
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
                      <Button onClick={this.handleHideComment}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </ButtonToolbar>
              </div>

              <div className="col-6">
                <ButtonToolbar>
                  <Button bsStyle="primary" onClick={this.handleShowReview}>
                    {this.props.reviews.length} &nbsp; Review
                  </Button>

                  <Modal
                    {...this.props}
                    show={this.state.showReview}
                    onHide={this.handleHideReview}
                    dialogClassName="custom-modal"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-lg">
                        Review
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="container ">
                        <div className="row ">
                          {this.props.reviews.map((review, index) => (
                            <div className="col-12 ">
                              <ReviewCard data={review} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.handleHideReview}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </ButtonToolbar>
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
  "recipe, stepTypes, recipeDetails, recipeSteps, waterLimit, backButton, recipeCreator, methods, reviews, userMe",
  actionsRecipes
)(RecipeSelection);
