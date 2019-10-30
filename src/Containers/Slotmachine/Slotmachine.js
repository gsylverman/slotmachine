import React, { Component } from "react";
import classes from "./slotmachine.module.css";
import Whiteband from "../../Components/WhiteBand/Whiteband";
import classesWhite from "../../Components/WhiteBand/WhiteBand.module.css";


class Slotmachine extends Component {

    render() {

       

        return (
            <div className={classes.Slotmachine}>
               

                <Whiteband coloana={1} actiune={this.props.porneste} classes={`${classesWhite.Whiteband} ${classesWhite.Whiteband1}`} />
                <Whiteband coloana={2}actiune={this.props.porneste} classes={`${classesWhite.Whiteband} ${classesWhite.Whiteband2}`} />
                <Whiteband coloana={3} actiune={this.props.porneste} classes={`${classesWhite.Whiteband} ${classesWhite.Whiteband3}`} />



            </div>


        );
    }
}

export default Slotmachine;