import React, { Component } from "react";
import classes from "./slotmachine.module.css";
import Whiteband from "../../Components/WhiteBand/Whiteband";
import classesWhite from "../../Components/WhiteBand/WhiteBand.module.css";


class Slotmachine extends Component {

    render() {
        const { lista1, lista2, lista3 } = this.props.liste;




        return (
            <div className={classes.Slotmachine}>

                <Whiteband lista={lista1} coloana={1} actiune={this.props.porneste} classes={`${classesWhite.Whiteband} ${classesWhite.Whiteband1}`} />
                <Whiteband lista={lista2} coloana={2} actiune={this.props.porneste} classes={`${classesWhite.Whiteband} ${classesWhite.Whiteband2}`} />
                <Whiteband lista={lista3} coloana={3} actiune={this.props.porneste} classes={`${classesWhite.Whiteband} ${classesWhite.Whiteband3}`} />


            </div>


        );
    }
}

export default Slotmachine;