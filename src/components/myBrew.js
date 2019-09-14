import React from "react";
import { Link } from "react-router-dom";

// import store
import { connect } from "unistore/react";
import actionsRecipes from "../store/actionsRecipes";

// import component
import RecipeCard from "./recipeCard";

class MyBrew extends React.Component {
  render() {
    return (
      <div>
        <Link to="/recipecreate">
          <button className="btn btn-primary">Tambah Guide</button>
        </Link>
        {this.props.recipes.map(value => (
          <div className="col-12">
            <RecipeCard data={value} />
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  "recipes,stepTypes,recipeDetails",
  actionsRecipes
)(MyBrew);
