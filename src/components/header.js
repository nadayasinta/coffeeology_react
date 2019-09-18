import React from "react";
import logo from "../assets/images/logo1.jpg";

function header(props) {
    return (
        <div className="container-fluid header px-0 fixed-top border-bottom">
            <div className="row h-100 mx-0">
                <div className="col-12 text-center h-100">
                    <a href="/">
                        <img
                            src={logo}
                            className="logoIcon h-100"
                            alt="altTag"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default header;
