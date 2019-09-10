import React from "react";
import me from "../assets/images/navbarMe.png";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="navbar">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <Link to={"/"}>
                            <img src={me} className="navbarLogo" />
                            <br />
                            Seduh
                        </Link>
                    </div>
                    <div className="col-2">
                        <img src={me} className="navbarLogo" />
                        <br />
                        Biji
                    </div>
                    <div className="col-2">
                        <img src={me} className="navbarLogo" />
                        <br />
                        Cari
                    </div>
                    <div className="col-2">
                        <img src={me} className="navbarLogo" />
                        <br />
                        Aktivitas
                    </div>
                    <div className="col-2">
                        <img src={me} className="navbarLogo" />
                        <br />
                        Profile
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
