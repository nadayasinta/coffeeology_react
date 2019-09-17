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
              {this.props.userMe.name}
              Ade Suprapto &nbsp;
              <span className="btn btn-orange">
                <img src={editProfile} alt="altTag" width="20px"></img>
              </span>
            </h3>
            <hr></hr>
            <span>
              {this.props.userMe.bio}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae
              aliquid porro quis, voluptatum nulla itaque optio pariatur dolores
              ipsa obcaecati temporibus voluptatibus tenetur sint nostrum
              molestias doloribus eius quia!
            </span>
          </div>
            <div className="col-md-6 col-xs-6 border" align="center">
              <h5>
                {this.props.userMe.brewCount} <br /> <span>Brew</span>
              </h5>
            </div>
            <div className="col-md-6 col-xs-6 border" align="center">
              <h5>
                {this.props.userMe.recipeCount} <br /> <span>Resep</span>
              </h5>
            </div>

          <div className="col-12 col-md-12 col-xs-12 mt-2">
            <div align="left">
              <span className="btn btn-orange">Resep Saya</span>
              <hr></hr>
            </div>
            <div align="left">
              <span className="btn btn-orange">Ubah Password</span>
              <hr></hr>
            </div>
            <div align="left">
              <span className="btn btn-orange">Keluar</span>
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
