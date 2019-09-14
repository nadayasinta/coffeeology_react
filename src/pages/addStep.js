import React from "react";
import { connect } from "unistore/react";
import { actionsRecipes } from "../store/store";
import Header from "../components/header";
import Plus from "../assets/images/plus.png";
import { Link } from "react-router-dom";
import timer from "../assets/images/RecipeIcon/timer.png";
import { async } from "q";

class AddStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepTemporary: []
    };
    this.note = React.createRef();
  }

  componentDidMount = async () => {
    console.log("did mount", sessionStorage.getItem("stepTemporary"));
    if (sessionStorage.getItem("stepTemporary") !== null) {
      await this.setState({
        stepTemporary: JSON.parse(sessionStorage.getItem("stepTemporary"))
      });
      console.log("if ", this.state.stepTemporary);
    }
  };

  convertSeconds(value) {
    let minutes = Math.floor(parseInt(value) / 60);
    let seconds = parseInt(value) - minutes * 60;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  deteleStep = async (event, idx) => {
    event.preventDefault();

    const temp = this.state.stepTemporary.filter(
      (step, index) => index !== idx
    );
    await this.setState(
      {
        stepTemporary: temp
      },
      () => {
        sessionStorage.setItem(
          "stepTemporary",
          JSON.stringify(this.state.stepTemporary)
        );
      }
    );
  };

  postData = e => {
    e.preventDefault();
    let recipes = JSON.parse(sessionStorage.getItem("Recipe"));
    let recipeDetails = JSON.parse(sessionStorage.getItem("RecipeDetail"));
    let steps = JSON.parse(sessionStorage.getItem("stepTemporary"));
    let time = 0;
    steps.map((step, index) => (time = time + step.time));
    recipes["time"] = time;
    recipeDetails["note"] = this.note.current.value;
    let data = {
      recipes: recipes,
      recipeDetails: recipeDetails,
      steps: steps
    };
    // testing
    sessionStorage.setItem("data", JSON.stringify(data));

    // this.props.postRecipe(data)
    // sessionStorage.removeItem("Recipe")
    // sessionStorage.removeItem("RecipeDetail")
    // sessionStorage.removeItem("stepTemporary")
    this.props.history.push("/activity");
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <form>
                <div className="form-group">
                  <div className="row justify-content-center bg-success mb-2">
                    <label for="note">Catatan</label>
                  </div>
                  <textarea
                    className="form-control"
                    id="note"
                    rows="3"
                    placeholder="catatan"
                    maxLength="250"
                    ref={this.note}
                  ></textarea>
                </div>
              </form>
              <div className="row justify-content-center bg-success mb-2">
                Tahapan
              </div>
              <div className="card">
                {this.state.stepTemporary.map((step, index) => {
                  return (
                    <div className="card-body" key={index}>
                      <div className="row justify-content-end">
                        <button
                          type="button"
                          onClick={e => this.deteleStep(e, index)}
                          className="btn btn-primary"
                        >
                          X
                        </button>
                      </div>
                      <div className="row justify-content-between">
                        <div className="col-4">
                          <img
                            src={this.props.stepTypes[step.stepTypeID].icon}
                            width="100%"
                          />
                        </div>
                        <div className="col-4">
                          {this.props.stepTypes[step.stepTypeID].name}
                        </div>
                        <div className="col-4">
                          <img className="mr-2" src={timer} width="20%" />
                          {this.convertSeconds(step.time)}
                        </div>
                      </div>
                      <hr></hr>
                    </div>
                  );
                })}
                <hr />
                <div className="card-body">
                  <Link to="/inputstep">
                    <img className="mr-2" src={Plus} alt="alt tag" width="6%" />
                    Add Steps
                  </Link>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary mt-4"
                onClick={e => this.postData(e)}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "stepTypes, stepTemporary",
  actionsRecipes
)(AddStep);
