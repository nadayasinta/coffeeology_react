import React from "react";
import logo from "../assets/images/logo1.jpg";
import { Link } from "react-router-dom";

function header(props) {
  return (
    <div className="container-fluid header px-0 fixed-top border-bottom">
      <div className="row h-100 mx-0">
        <div className="col-12 text-center h-100">
          <Link to="/">
            <img src={logo} className="logoIcon h-100" alt="altTag" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default header;
