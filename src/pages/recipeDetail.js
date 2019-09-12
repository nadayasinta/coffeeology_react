import React from "react";
import { connect } from "unistore/react";
import { actionsRecipes } from "../store/store";

// import component
import StepCard from "../components/stepCard";
import Header from "../components/header";
import Navbar from "../components/navbar";

// test
import Radar from "../components/radar";

class RecipeSelection extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Radar data={this.props.recipeDetails} />
                <div className="col">Tahapan</div>
                {this.props.recipeSteps.map(recipeStep => {
                    return (
                        <div className="col-12">
                            <StepCard data={recipeStep} />
                        </div>
                    );
                })}
                <Navbar />
            </div>
        );
    }
}

export default connect(
    "recipes,stepTypes,recipeDetails, recipeSteps",
    actionsRecipes
)(RecipeSelection);
