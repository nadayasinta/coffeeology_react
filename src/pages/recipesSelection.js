import React from 'react';
import { connect } from 'unistore/react';
import { actionsRecipes } from '../store/store';

class RecipesSelection extends React.Component {
  render() {
    console.log(this.props.stepTypes.stir.icon);
    return (
      <div>
        <h2>Tessss</h2>
        <h3>{this.props.stepTypes.stir.name}</h3>
        <img src={this.props.stepTypes.stir.icon} />
      </div>
    );
  }
}

export default connect(
  'recipes,stepTypes',
  actionsRecipes
)(RecipesSelection);
