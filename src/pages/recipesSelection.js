import React from 'react';
import { connect } from 'unistore/react';
import { actionsRecipes } from '../store/store';

//import component
import RecipeCard from '../components/recipeCard';
import Header from '../components/header';

class RecipesSelection extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h2>Recipes Selection</h2>
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
  'recipes,stepTypes',
  actionsRecipes
)(RecipesSelection);
