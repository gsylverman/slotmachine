import React, { Component } from "react";
import MoneyControl from "../../Components/MoneyControl/MoneyControl";
import classes from "./MainContainer.module.css";
import Slotmachine from "../Slotmachine/Slotmachine";



class MainContainer extends Component {
    state = {
        pornesteAnimatie: false

    }

    start = (e) => {

        this.setState({ pornesteAnimatie: true });
        setTimeout(()=>this.setState({pornesteAnimatie:false}),4000)
    }

    render() {

        const style = {
            position: "absolute",
            top: "-50px"
        }
        return (
            <div className={classes.MainContainer} >
                <MoneyControl />
                <Slotmachine porneste={this.state.pornesteAnimatie} />
                <button disabled={this.state.pornesteAnimatie} onClick={this.start} style={style}>animeaza</button>


            </div>


        );
    }
}

export default MainContainer;