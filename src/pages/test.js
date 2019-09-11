import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { hidden: true };
    }

    onClick() {
        this.setState((prevState, props) => ({
            hidden: !prevState.hidden
        })); //alert(ReactCSSTransitionGroup);
    }
    render() {
        return (
            <div>
                <div onClick={this.onClick}>Click me1</div>
                <CSSTransitionGroup
                    transitionName="toggle"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                    {this.state.hidden ? null : (
                        <div className="toggle-base">Toogle</div>
                    )}
                </CSSTransitionGroup>
                <div>Something else.</div>
            </div>
        );
    }
}

export { Test };
