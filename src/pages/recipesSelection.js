import React from 'react';
import { connect } from 'unistore/react';
import { actionsRecipes } from '../store/store';

// import component
import RecipeCard from '../components/recipeCard';
import Header from '../components/header';

// test
import Radar from '../components/radar';

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
        <Radar tasteData={this.props.recipeDetails} />
      </div>
    );
  }
}

export default connect(
  'recipes,stepTypes,recipeDetails',
  actionsRecipes
)(RecipesSelection);
