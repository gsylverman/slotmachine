import React from "react";
import classes from "./IconsBand.module.css";


const IconsBand = (props) => {

    

    const colanaSt = () => {
        if (props.coloana === 1) {
            return classes.Ruleaza1;
        } else if (props.coloana === 2) {
            return classes.Ruleaza2;
        } else if (props.coloana === 3) {
            return classes.Ruleaza3;
        }
        
    }

    const vitezaColoana = () => {
        if (props.coloana === 1) {
            return classes.speed1;
        } else if (props.coloana === 2) {
            return classes.speed2;
        } else if (props.coloana === 3) {
            return classes.speed3;
        }

    }




    let clase = [
        props.actiune ? colanaSt() : "",
        classes.Iconband,
        vitezaColoana()

    ];

    clase = clase.join(" ");




    return (
        <div className={props.static ? classes.IconsBand : clase}>

            <div className={classes.p}> 1</div>
            <div className={classes.p}> 2</div>
            <div className={classes.p}> 3</div>
            <div className={classes.p}> 4</div>
            <div className={classes.p}> 5</div>
            <div className={classes.p}> 6</div>
            <div className={classes.p}> 7</div>
            <div className={classes.p}> 8</div>
            <div className={classes.p}> 9</div>
            <div className={classes.p}> 10</div>
            <div className={classes.p}> 11</div>
            <div className={classes.p}> 12</div>
            <div className={classes.p}> 13</div>
            <div className={classes.p}> 14</div>
            <div className={classes.p}> 15</div>
            <div className={classes.p}> 16</div>
            <div className={classes.p}> 1</div>
            <div className={classes.p}> 2</div>
            <div className={classes.p}> 3</div>
            <div className={classes.p}> 4</div>
            <div className={classes.p}> 5</div>
            <div className={classes.p}> 6</div>
            <div className={classes.p}> 7</div>
            <div className={classes.p}> 8</div>
            <div className={classes.p}> 9</div>
            <div className={classes.p}> 10</div>
            <div className={classes.p}> 11</div>
            <div className={classes.p}> 12</div>
            <div className={classes.p}> 13</div>
            <div className={classes.p}> 14</div>
            <div className={classes.p}> 15</div>
            <div className={classes.p}> 16</div>

        </div>
    );
}

export default IconsBand;