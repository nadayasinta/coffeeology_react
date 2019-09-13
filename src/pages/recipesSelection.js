import React from "react";
import { connect } from "unistore/react";
import { actionsRecipes } from "../store/store";

// import component
import RecipeCard from "../components/recipeCard";
import Navbar from "../components/navbar";

class RecipesSelection extends React.Component {
  render() {
    return (
      <div>
        <h2>Recipes Selection</h2>
        {this.props.recipes.map(value => {
          return (
            <div className="col-12">
              <RecipeCard data={value} />
            </div>
          );
        })}
        <Navbar />
      </div>
    );
  }
}

export default connect(
  "recipes,stepTypes,recipeDetails",
  actionsRecipes
)(RecipesSelection);
