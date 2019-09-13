import React from "react";
import { connect } from "unistore/react";
import { actionsTimer } from "../store/store";
import Header from "../components/header";
import Plus from "../assets/images/plus.png";
import { Link } from "react-router-dom";
import timer from "../assets/images/RecipeIcon/timer.png"
import { async } from "q";

class AddStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepTemporary: []
    };
  }

  componentDidMount= async ()=>{
    await this.setState({ stepTemporary: JSON.parse(sessionStorage.getItem("stepTemporary")) })
  }

  convertSeconds(value) {
    let minutes = Math.floor(parseInt(value)/60)
    let seconds = parseInt(value) - minutes*60
    if (minutes < 10 ) {
        minutes =  `0${minutes}`
    } 
    if (seconds < 10 ) {
        seconds = `0${seconds}`
    }
    return `${minutes}:${seconds}`
}

  deteleStep = async (index) => {
    await this.setState({ stepTemporary : this.state.stepTemporary.splice(parseInt(index),1) })
    sessionStorage.setItem("stepTemporary", JSON.stringify(this.state.stepTemporary))
  }

  render() {
    console.log("seconds ", this.convertSeconds(100));
    return (
      <div>
        <Header />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-12 col-md-12 col-xs-12">
              <form>
                <div className="form-group">
                  <div className="row justify-content-center bg-success mb-2">
                    <label for="note">Catatan</label>
                  </div>
                  <textarea
                    className="form-control"
                    id="note"
                    rows="3"
                  ></textarea>
                </div>
              </form>
              <div className="row justify-content-center bg-success mb-2">
                Tahapan
              </div>
              <div className="card">
                {this.state.stepTemporary.map(
                  (step, index) => {
                    return (
                      <div className="card-body">
                        <div className="row justify-content-end">
                        <button type="button" onClick={this.deteleStep(index)} class="btn btn-primary">X</button>
                        </div>
                        <div className="row justify-content-between">
                          <div className="col-4">
                            <img src={this.props.stepTypes[step.stepTypeID].icon} width="100%" />
                          </div>
                          <div className="col-4">
                          {this.props.stepTypes[step.stepTypeID].name}
                          </div>
                          <div className="col-4">
                             <img className="mr-2" src={timer} width="20%" /> 
                             {this.convertSeconds(step.time)}</div>
                        </div>
                        <hr></hr>
                      </div>
                    );
                  }
                )}
                <hr />
                <div className="card-body">
                  <Link to="/inputstep">
                    <img className="mr-2" src={Plus} alt="alt tag" width="6%" />
                    Add Steps
                  </Link>
                </div>
              </div>
              <button type="button" className="btn btn-primary mt-4">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "stepTypes, stepTemporary",
  actionsTimer
)(AddStep);
