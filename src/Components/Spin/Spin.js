import React from "react";
import classes from "./Spin.module.css";

const Spin = (props) => {
    let clase = [
        classes.Spin,
        //flicarire :-)
        props.disabled ? classes.disabled : classes.flicareste

    ];
    clase = clase.join(" ");
    const porneste = () => {
        if (!props.disabled) {
            props.spin();
        }
    };


    return (
        <div onClick={porneste} className={clase}>SPIN</div>
    );
};


export default Spin;