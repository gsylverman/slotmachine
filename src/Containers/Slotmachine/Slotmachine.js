import React, { Component } from "react";
import classes from "./slotmachine.module.css";
import MoneyControl from "../../Components/MoneyControl/MoneyControl";
import Whiteband from "../../Components/WhiteBand/Whiteband";



class Slotmachine extends Component {

    render() {
        return (
            <div className={classes.Slotmachine}>
                <MoneyControl />
                <Whiteband />





            </div>


        );
    }
}

export default Slotmachine;