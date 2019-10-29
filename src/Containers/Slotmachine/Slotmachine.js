import React, { Component } from "react";
import classes from "./slotmachine.module.css";
import Whiteband from "../../Components/WhiteBand/Whiteband";
import classesWhite from "../../Components/WhiteBand/WhiteBand.module.css";


class Slotmachine extends Component {

    render() {
        return (
            <div className={classes.Slotmachine}>
              
                <Whiteband classes={classesWhite.Whiteband1}/>
                <Whiteband classes={classesWhite.Whiteband2} />
                <Whiteband classes={classesWhite.Whiteband3} />





            </div>


        );
    }
}

export default Slotmachine;