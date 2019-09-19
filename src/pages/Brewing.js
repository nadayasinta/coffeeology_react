import React from "react";
import { Link } from "react-router-dom";

// import store
import { connect } from "unistore/react";

// import component
import MethodCard from "../components/methodCard";

// import image
import HomeImage from "../assets/images/home.jpg";

class Brewing extends React.Component {
    render() {
        return (
            <div>
                <div className="container brewing">
                    <div className="row rowhomeimage">
                        {/* <img src={HomeImage} className="homeimage" alt="altTag" /> */}
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to="0"
                                    className="active"
                                ></li>
                                <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to="1"
                                ></li>
                                <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to="2"
                                ></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        className="d-block w-100"
                                        src="https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-260nw-668593321.jpg"
                                        alt="First slide"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>hehehe</h5>
                                        <p>
                                            adasdasfasfjhasdja adsjfdajsdja jsd
                                            asdjahd
                                        </p>
                                        <button className="btn-danger">
                                            yo
                                        </button>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="d-block w-100"
                                        src={HomeImage}
                                        alt="Second slide"
                                    />
                                    <h5>hehehe</h5>
                                    <p>
                                        adasdasfasfjhasdja adsjfdajsdja jsd
                                        asdjahd
                                    </p>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        className="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                                        alt="Third slide"
                                    />
                                    <h5>hehehe</h5>
                                    <p>
                                        adasdasfasfjhasdja adsjfdajsdja jsd
                                        asdjahd
                                    </p>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-3">
                        <div className="col-12">
                            <h2>ini judulnya apa</h2>
                        </div>
                        {this.props.methods.map((method, index) => (
                            <div className="col-4 py-1 px-2">
                                <Link to={"/recipes/" + method.id}>
                                    <MethodCard
                                        name={method.name}
                                        icon={method.icon}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect("methods,recipeSteps, timerNowIndex, timerUp")(Brewing);
