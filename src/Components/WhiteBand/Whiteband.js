import React from "react";
import IconsBand from "./IconsBand/IconsBand";

const Whiteband = (props) => {

    let rez = [1, 2, 3];

    if (props.started) {
        rez = [...props.rez];
    }

    return (
        <div className={props.classes}>
            {props.actiune ? < IconsBand lista={props.lista} coloana={props.coloana} actiune={props.actiune} /> : < IconsBand lista={rez} coloana={props.coloana} static />}
        </div>
    );
};

export default Whiteband;