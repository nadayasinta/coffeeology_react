import React from "react";

// import store
import { connect } from "unistore/react";
import actionsRecipes from "../store/actionsRecipes";

class InputStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waterAmount: 0,
      stepTemporary: []
    };
    this.waterAmount = React.createRef();
    this.note = React.createRef();
    this.minute = React.createRef();
    this.second = React.createRef();
  }

  componentDidMount = async () => {
    if (sessionStorage.getItem("stepTemporary") === null) {
      sessionStorage.setItem("stepTemporary", JSON.stringify([]));
    } else {
      this.setState({
        stepTemporary: JSON.parse(sessionStorage.getItem("stepTemporary"))
      });
    }
  };

  // to handle change in "pilih tahapan"
  handleChange = event => {
    this.props.setStepTypeNumberSelected(event.target.value);
  };

  // to handle when data will submit
  handleSubmit = async event => {
    event.preventDefault();
    // to handle if user input water amount
    if (parseInt(this.waterAmount.current.value) > 0) {
      this.setState({
        waterAmount: parseInt(this.waterAmount.current.value)
      });
    }
    // set total time
    let timeData =
      parseInt(this.minute.current.value) * 60 +
      parseInt(this.second.current.value);
    // data to save in session storage
    let data = {
      stepTypeID: this.props.stepTypeNumberSelected,
      note: this.note.current.value,
      time: timeData,
      amount: this.state.waterAmount
    };

    let temp = this.state.stepTemporary.concat([data]);
    await sessionStorage.setItem("stepTemporary", JSON.stringify(temp));

    this.props.history.push("/recipes/create/addstep");
  };

  render() {
    return (
      <div>
        <div className="container px-0">
          <div className="row justify-content-center">
            {/* pilih tahapan */}
            <div className="col-6">
              <div className="form-group" style={{ textAlign: "left" }}>
                <label for="stepType">Pilih Tahapan :</label>
                <select
                  className="form-control"
                  id="stepType"
                  onChange={this.handleChange}
                  value={this.props.stepTypeNumberSelected}
                >
                  {this.props.stepTypeNumber.map((stepTypeNumber, index) => {
                    return (
                      <option value={stepTypeNumber}>
                        {this.props.stepTypes[stepTypeNumber].name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {/* gambar tahapan */}
            <div className="col-6">
              <img
                src={
                  this.props.stepTypes[this.props.stepTypeNumberSelected].icon
                }
                width="80%"
                alt="alt tag"
              />
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            {/* form jumlah air */}
            {parseInt(this.props.stepTypeNumberSelected) === 1 ||
              parseInt(this.props.stepTypeNumberSelected) === 2 ||
              parseInt(this.props.stepTypeNumberSelected) === 12 ? (
                <div className="form-group mt-3" style={{ textAlign: "left" }}>
                  <label for="Jumlah Air">Jumlah Air </label>
                  <input
                    type="number"
                    className="form-control"
                    id="Jumlah Air"
                    placeholder="200 ml"
                    ref={this.waterAmount}
                    min="0"
                    required
                  />
                </div>
              ) : (
                <div ref={this.waterAmount}></div>
              )}

            {/* form catatan */}
            <div className="form-group mb-4" style={{ textAlign: "left" }}>
              <label for="Catatan">Catatan </label>
              <textarea
                className="form-control"
                id="Catatan"
                rows="3"
                placeholder="catatan"
                maxLength="250"
                ref={this.note}
              ></textarea>
            </div>
            {/* form durasi */}
            <div style={{ textAlign: "left" }}>Duration</div>
            <div className="row">
              <div className="col">
                <label for="mins">Menit</label>
                <input
                  type="number"
                  id="mins"
                  className="form-control"
                  placeholder="0 menit"
                  min="0"
                  ref={this.minute}
                  required
                />
              </div>
              <div className="col">
                <label for="secs">Detik</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0 detik"
                  id="secs"
                  min="0"
                  max="59"
                  ref={this.second}
                  required
                />
              </div>
            </div>
            {/* form submit */}
            <div className="form-group mt-3">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                value="Submit"
              >
                {" "}
                Tambah{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  "stepTypeNumberSelected, stepTypes, stepTypeNumber, stepNumber, stepTemporary",
  actionsRecipes
)(InputStep);
