import React from "react";
import HistoryCard from "./historyCard";
import { connect } from "unistore/react";
import actionsActivity from "../store/actionsActivity";

class history extends React.Component {
    componentDidMount = async () => {
        this.props.getHistory();
    };
    render() {
        return (
            <div className="w-100">
                {this.props.history.map((value, key) => (
                    <div className="col-12">
                        <HistoryCard
                            data={value}
                            icon={this.props.methods[value.methodID - 1].icon}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default connect(
    "methods, history",
    actionsActivity
)(history);
