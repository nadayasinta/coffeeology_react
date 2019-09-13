import React from "react";
import logo from "../assets/images/logo1.jpg";

function Header(props) {
    return (
        <div className="container-fluid header px-0">
            <div className="row h-100 mx-0">
                <div className="col-12 text-center h-100">
                    <img src={logo} className="logoIcon h-100" alt="logo"/>
                </div>
            </div>
        </div>
    );
}

export default Header;
