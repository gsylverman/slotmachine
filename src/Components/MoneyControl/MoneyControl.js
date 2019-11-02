import React from "react";
import classes from "./MoneyControl.module.css";


const MoneyControl = (props) => {

    const bitCoinStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#e47700"
    };
    let startClasses = [
        classes.Start,
        props.amount > 0 ? "" : classes.disabled
    ];
    startClasses = startClasses.join(" ");

    //reprorneste jocul
    let disabled = props.started && props.amount < 10 ? false : props.started;

    return (


        <div className={classes.MoneyControl}>

            <div className={classes.triangleLeft}></div>

            <div className={classes.circle}>
                <i style={bitCoinStyle} className="fab fa-btc"></i>
            </div>



            <input placeholder="Enter Amount" className={classes.amount} disabled={disabled} type="number" onChange={(e) => props.changeAmount(e.target.value)} value={props.amount}></input>

            <div className={classes.triangleRight}></div>
            <div className={classes.hex}></div>

            <div className={startClasses}>
                Start
                </div>


        </div>


    );
};


export default MoneyControl;