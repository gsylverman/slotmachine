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

 


    return (


        <div className={classes.MoneyControl}>

            <div className={classes.triangleLeft}></div>

            <div className={classes.circle}>
                <i style={bitCoinStyle} className="fab fa-btc"></i>
            </div>
          
            <input placeholder="Enter Amount" className={classes.amount} disabled={props.started} type="text" onChange={(e)=>props.changeAmount(e.target.value)} value={props.amount}></input>

            <div className={classes.triangleRight}></div>
            <div className={classes.hex}></div>


        </div>


    );
};


export default MoneyControl;