import React from "react";

function stepCard(props) {
    return (
        <div className="container-fluid stepCard border">
            <div className="row pt-2">
                <div className="col-2">step ke</div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-2">logo step</div>
                                <div className="col-10">nama step</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-2">logo waktu</div>
                                <div className="col-10">nama waktu</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">logo amount</div>
                        <div className="col-10">nama amount</div>
                    </div>

                    <div className="row">
                        <div className="col-2">logo note</div>
                        <div className="col-10">nama note</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default stepCard;
