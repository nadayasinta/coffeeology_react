import React from "react";
import RecipeCard from "./recipeCard";
import { connect } from "unistore/react";
import actionsRecipes from "../store/actionsRecipes";

function history(props) {
  return (
    <div>
      {props.recipes.map(value => (
        <div className="col-12">
          <RecipeCard data={value} />
        </div>
      ))}
    </div>
  );
}

export default connect(
  "recipes, stepTypes, recipeDetails",
  actionsRecipes
)(history);
