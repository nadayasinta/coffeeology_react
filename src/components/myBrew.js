import React from "react";
import { connect } from "unistore/react";
import { actionsRecipes } from "../store/store";
import { Link } from "react-router-dom";

// import component
import RecipeCard from "../components/recipeCard";

class MyBrew extends React.Component {
  render() {
    return (
      <div>
        <Link to="/tambah">
          <button className="btn btn-primary">Tambah Guide</button>
        </Link>
        {this.props.recipes.map(value => {
          return (
            <div className="col-12">
              <RecipeCard data={value} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(
  "recipes,stepTypes,recipeDetails",
  actionsRecipes
)(MyBrew);
