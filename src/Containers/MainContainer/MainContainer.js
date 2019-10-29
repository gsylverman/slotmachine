import React, { Component } from "react";
import MoneyControl from "../../Components/MoneyControl/MoneyControl";
import classes from "./MainContainer.module.css";
import Slotmachine from "../Slotmachine/Slotmachine";



class MainContainer extends Component {

    render() {
        return (
            <div className={classes.MainContainer} >
                <MoneyControl />
                <Slotmachine />
                





            </div>


        );
    }
}

export default MainContainer;