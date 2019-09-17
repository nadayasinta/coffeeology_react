import React from "react";
import { Link } from "react-router-dom";

// import image
import profileIcon from "../assets/images/profile.png";
import editProfile from "../assets/images/edit-profile.png";

// import store
import { connect } from "unistore/react";
import actionsProfile from "../store/actionsProfile";

class Profile extends React.Component {
  componentDidMount = () => {
    this.props.getProfile();
  };

  render() {
    return (
      <div className="container border">
        <div className="row login_box">
          <div className="col-md-12 col-xs-12 mb-2" align="center">
            <div className="mt-2">
              <img
                src={profileIcon}
                style={{ borderRadius: "50%", backgroundColor: "#000000" }}
                width="100px"
              />
            </div>
            <h3>
              {this.props.userMe.name} &nbsp;
              Ade Suprapto &nbsp;
              <span className="btn btn-orange" onClick={(e)=>this.changePassword(e)}>
                <img src={editProfile} alt="altTag" width="20px"></img>
              </span>
            </h3>
            <hr></hr>
            <span className="text-justify">
              {this.props.userMe.bio} &nbsp;
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae
              aliquid porro quis, voluptatum nulla itaque optio pariatur dolores
              ipsa obcaecati temporibus voluptatibus tenetur sint nostrum
              molestias doloribus eius quia!
            </span>
          </div>
            <div className="col-md-6 col-xs-6 border btn btn-orange" align="center" onClick={(e)=>this.props.history.push("/activity")} >
              <h5>
                {this.props.userMe.brewCount} <br /> <span>Brew</span>
              </h5>
            </div>
            <div className="col-md-6 col-xs-6 border btn btn-orange" align="center" onClick={(e)=>this.props.history.push("/activity")}>
              <h5>
                {this.props.userMe.recipeCount} <br /> <span>Resep</span>
              </h5>
            </div>

          <div className="col-12 col-md-12 col-xs-12 mt-2">
            <div align="left">
            <button type="button" className="btn btn-primary">Ubah Password</button>
              <hr></hr>
            </div>
            <div align="left">
              <button type="button" className="btn btn-primary mb-3">Keluar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "userMe",
  actionsProfile
)(Profile);
