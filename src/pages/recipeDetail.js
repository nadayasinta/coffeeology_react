import React from "react";
import { connect } from "unistore/react";
import { actionsRecipes } from "../store/store";

// import component
import StepCard from "../components/stepCard";
import Header from "../components/header";

// test
import Radar from "../components/radar";

class RecipeSelection extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.recipes.map(value => {
                    return (
                        <div className="col-12">
                            <StepCard data={this.props.recipeSteps} />
                        </div>
                    );
                })}
                <Radar data={this.props.recipeDetails} />
            </div>
        );
    }
}

export default connect(
    "recipes,stepTypes,recipeDetails, recipeSteps",
    actionsRecipes
)(RecipeSelection);
