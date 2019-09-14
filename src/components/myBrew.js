import React from "react";
import { Link } from "react-router-dom";

// import store
import { connect } from "unistore/react";
import actionsActivity from "../store/actionsActivity";

// import component
import MyBrewCard from "./myBrewCard";

class MyBrew extends React.Component {
  componentDidMount = async () => {
    this.props.getMyBrew()
  }

  render() {
    return (
      <div>
        <Link to="/recipecreate">
          <button className="btn btn-primary">Tambah Guide</button>
        </Link>
        {this.props.myBrew.map((value, key) => (
          <div className="col-12">
            <MyBrewCard icon={this.props.methods[value.methodID].icon} data={value} />
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  "myBrew, methods",
  actionsActivity
)(MyBrew);
