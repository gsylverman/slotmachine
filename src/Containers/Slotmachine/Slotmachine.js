import React, { Component } from "react";
import classes from "./slotmachine.module.css";
import Whiteband from "../../Components/WhiteBand/Whiteband";
import classesWhite from "../../Components/WhiteBand/WhiteBand.module.css";


class Slotmachine extends Component {

    render() {
        const { lista1, lista2, lista3 } = this.props.liste;
        const { l1, l2, l3 } = this.props.rez;



        return (
            <div className={classes.Slotmachine}>

                <Whiteband started={this.props.started} rez={l1} lista={lista1} coloana={1} actiune={this.props.porneste} classes={`${classesWhite.Whiteband} ${classesWhite.Whiteband1}`} />
                <Whiteband started={this.props.started} rez={l2} lista={lista2} coloana={2} actiune={this.props.porneste} classes={`${classesWhite.Whiteband} ${classesWhite.Whiteband2}`} />
                <Whiteband started={this.props.started} rez={l3} lista={lista3} coloana={3} actiune={this.props.porneste} classes={`${classesWhite.Whiteband} ${classesWhite.Whiteband3}`} />


            </div>


        );
    }
}

export default Slotmachine;