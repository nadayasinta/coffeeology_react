import React from "react";
import { Link } from "react-router-dom";

// import store
import { connect } from "unistore/react";

// import component
import MethodCard from "../components/methodCard";

// import image
import HomeImage from "../assets/images/home.jpg"

class Brewing extends React.Component {
  render() {
    return (
      <div>
        <div className="container brewing">
          <div className="row">
            <img src={HomeImage} className="homeimage" />
          </div>
          <div className="row">
            {this.props.methods.map((method, index) => (
              <div className="col-4 p-1">
                <Link to={"/recipes/" + method.id}>
                  <MethodCard name={method.name} icon={method.icon} />
                </Link>

              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "methods,recipeSteps, timerNowIndex, timerUp",
)(Brewing);
