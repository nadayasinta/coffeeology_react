import React from "react";
import { connect } from "unistore/react";
import { actionsTimerTime } from "../store/store";
import Header from "../components/header";
import MethodCard from "../components/methodCard";
import Navbar from "../components/navbar";
import Timer from "../components/timer";

class Brewing extends React.Component {
    isTimerZero = () => {
        console.log("recipetime", this.props.recipe[0].time);
        if (this.props.timerUp === 0) {
            this.props.setTimerTime(this.props.recipe[0].time);
            return <Timer startCount={this.props.recipe[0].time} />;
        }
    };

    componentDidMount() {
        this.isTimerZero();
    }

    render() {
        return (
            <div>
                <Header />
                {this.isTimerZero()}

                <div className="container">
                    <div className="row">
                        {this.props.methods.map((method, index) => (
                            <div className="col-4 py-3">
                                <MethodCard
                                    name={method.name}
                                    icon={method.icon}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <Navbar />
            </div>
        );
    }
}

export default connect(
    "methods,recipe, timerNowIndex, timerUp",
    actionsTimerTime
)(Brewing);
