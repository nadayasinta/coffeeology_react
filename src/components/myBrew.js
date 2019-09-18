import React from "react";
import { Link } from "react-router-dom";

// import store
import { connect } from "unistore/react";
import actionsActivity from "../store/actionsActivity";

// import component
import RecipeCard from "./recipeCard";

class MyBrew extends React.Component {
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

  componentDidMount = async () => {
    this.props.getMyBrew();
  };

  render() {
    return (
      <div>
        <Link to="/recipes/create">
          <button className="btn btn-primary">Tambah Guide</button>
        </Link>
        {this.props.myBrew.map((value, key) => (
          <div className="col-12">
            <Link to={`/recipe/${value.id}`}>
              <RecipeCard
                className="w-100"
                pageType="pageMyBrew"
                methodIcon={this.props.methods[value.methodID - 1].icon}
                data={value}
                time={this.convertSeconds(value.time)}
              />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  "myBrew, methods",
  actionsActivity
)(MyBrew);
