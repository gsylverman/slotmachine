import React, { Component } from "react";
import classes from "./MoneyControl.module.css";

class MoneyControl extends Component {

    constructor(props) {
        super(props);
        // ref pt focusare element
        this.amountInput = React.createRef();
    }

    componentDidMount() {
        //focuseaza pe amount la deschidere aplicatie
        this.amountInput.current.focus();
    }

    componentDidUpdate() {
        //focuseaza iar pe amount
        if (this.props.amount < 10) {
            setTimeout(() => {
                this.amountInput.current.focus();
            }, 3000);
        }
    }

    render() {
        const bitCoinStyle = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#e47700"
        };
        let startClasses = [
            classes.Start,
            this.props.amount > 0 ? "" : classes.disabled
        ];
        startClasses = startClasses.join(" ");

        //reprorneste jocul
        let disabled = this.props.started && this.props.amount < 10 ? false : this.props.started;

        return (
            <div className={classes.MoneyControl}>
                <div className={classes.triangleLeft}></div>
                <div className={classes.circle}>
                    <i style={bitCoinStyle} className="fab fa-btc"></i>
                </div>
                <input
                    ref={this.amountInput}
                    placeholder="Enter Amount"
                    className={classes.amount}
                    disabled={disabled}
                    type="number"
                    onChange={(e) => this.props.changeAmount(e.target.value)}
                    value={this.props.amount}>
                </input>

                <div className={classes.triangleRight}></div>
                <div className={classes.hex}></div>
                <div className={startClasses}>
                    Start
                </div>
            </div>
        );
    }
};

export default MoneyControl;