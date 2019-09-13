import React from "react";
import { connect } from "unistore/react";
import { actionsTimer } from "../store/store";
import Header from "../components/header";
import { async } from "q";

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

  // componentDidMount = async () => {
  //   console.log(sessionStorage.getItem("stepTemporary"))
  //   if (sessionStorage.getItem("stepTemporary") !== null){
  //      this.setState({stepTemporary : JSON.parse(sessionStorage.getItem("stepTemporary")) })
  //   }
  //   console.log("steptemporary did mount", this.state.stepTemporary)
  // }

  // to handle change in "pilih tahapan"
  handleChange = event => {
    this.props.setStepTypeNumberSelected(event.target.value);
  };

  // to handle when data will submit
  handleSubmit = async event => {
    event.preventDefault();

    if (sessionStorage.getItem("stepTemporary") !== null) {
      this.setState({
        stepTemporary: JSON.parse(sessionStorage.getItem("stepTemporary"))
      });
      console.log("if ", this.state.stepTemporary);
    } else {
      sessionStorage.setItem(
        "stepTemporary",
        JSON.stringify([])
      );
      console.log("else ", this.state.stepTemporary);
    }

    if (parseInt(this.waterAmount.current.value) > 0) {
      this.setState({
        waterAmount: parseInt(this.waterAmount.current.value)
      });
    }
    // set total time
    let timeData =
      parseInt(this.minute.current.value) * 60 +
      parseInt(this.second.current.value);

    let data = {
      stepTypeID: this.props.stepTypeNumberSelected,
      note: this.note.current.value,
      time: timeData,
      amount: this.state.waterAmount
    };

    // console.log("data ", data);
    // console.log("stepTemporary", this.state.stepTemporary);
    // let temp = this.state.stepTemporary.push(data)
    // console.log("temp", temp)
     this.setState({ stepTemporary: this.state.stepTemporary.push(data) });
     sessionStorage.setItem(
      "stepTemporary",
      JSON.stringify(this.state.stepTemporary)
    );
    // console.log(
    //   "sessiion strorafe",
    //   sessionStorage.getItem("stepTemporary")
    // );
    // //  sessionStorage.setItem("stepTemporary", JSON.stringify(temp))
    // this.props.history.push("/addstep");
  };

  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-12 col-md-12 col-xs-12">
              <div className="row justify-content-between mt-3">
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
                      {this.props.stepTypeNumber.map(
                        (stepTypeNumber, index) => {
                          return (
                            <option value={stepTypeNumber}>
                              {this.props.stepTypes[stepTypeNumber].name}
                            </option>
                          );
                        }
                      )}
                    </select>
                  </div>
                </div>
                {/* gambar tahapan */}
                <div className="col-6">
                  <img
                    src={
                      this.props.stepTypes[this.props.stepTypeNumberSelected]
                        .icon
                    }
                    width="80%"
                    alt="alt tag"
                  />
                </div>
              </div>
              <form onSubmit={this.handleSubmit}>
                {/* form jumlah air */}
                <div className="form-group mt-3" style={{ textAlign: "left" }}>
                  <label for="Jumlah Air">Jumlah Air </label>
                  <input
                    type="number"
                    className="form-control"
                    id="Jumlah Air"
                    placeholder="200 ml"
                    ref={this.waterAmount}
                    min="0"
                  />
                </div>
                {/* form catatan */}
                <div className="form-group mb-4" style={{ textAlign: "left" }}>
                  <label for="Catatan">Catatan </label>
                  <textarea
                    className="form-control"
                    id="Catatan"
                    rows="3"
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
        </div>
      </div>
    );
  }
}

export default connect(
  "stepTypeNumberSelected, stepTypes, stepTypeNumber, stepNumber, stepTemporary",
  actionsTimer
)(InputStep);
