import React from "react";
import { Link } from "react-router-dom";
// import navbar image
import navbarProfile from "../assets/images/navbarProfile.png";
import navbarSearch from "../assets/images/navbarSearch.png";
import navbarBeans from "../assets/images/navbarBeans.png";
import navbarBrew from "../assets/images/navbarBrew.png";
import navbarActivity from "../assets/images/navbarActivity.png";

function navbar(props) {
  return (
    <div
      className="container-fluid navbar py-2 px-3 fixed-bottom"
      style={{ maxWidth: "480px" }}
    >
      <div className="row d-flex justify-content-around">
        <div className="col-2 text-center px-0">
          <Link to="/">
            <img src={navbarBrew} className="navbarIcon w-50 py-1" />
            <h6>Seduh</h6>
          </Link>
        </div>
        <div className="col-2 text-center px-0">
          <Link to="/login">
            <img
              src={navbarBeans}
              className="navbarIcon w-50 py-1"
              alt="alt tag"
            />
            <h6>Biji</h6>
          </Link>
        </div>
        <div className="col-2 text-center px-0">
          <Link to="/recipedemo">
            <img
              src={navbarSearch}
              className="navbarIcon w-50 py-1"
              alt="alt tag"
            />
            <h6>Cari</h6>
          </Link>
        </div>
        <div className="col-2 text-center px-0">
          <Link to="/activity">
            <img
              src={navbarActivity}
              className="navbarIcon w-50 py-1"
              alt="alt tag"
            />
            <h6>Aktivitas</h6>
          </Link>
        </div>
        <div className="col-2 text-center px-0">
          <Link
            onClick={e => {
              sessionStorage.removeItem("token");
            }}
          >
            <img
              src={navbarProfile}
              className="navbarIcon  w-50 py-1"
              alt="alt tag"
            />
            <h6>Profile</h6>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default navbar;
