import React from "react";
import classes from "./IconsBand.module.css";
import Icon from "./Icon/Icon";

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

    const compuneListaDeIcoane = () => {

        return props.lista.map(element => {
            return (<Icon
                key={Math.random()}
                imgNumber={element}
            />)
        });
    }

    return (

        <div className={props.static ? classes.IconsBand : clase}>
            {compuneListaDeIcoane()}
        </div>
    );
}

export default IconsBand;