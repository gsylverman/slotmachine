import React, { Component } from "react";
import MoneyControl from "../../Components/MoneyControl/MoneyControl";
import classes from "./MainContainer.module.css";
import Slotmachine from "../Slotmachine/Slotmachine";



class MainContainer extends Component {
    state = {
        pornesteAnimatie: false,
        items: [],
        amount: 100,
        rezultate: { l1: [], l2: [], l3: [] },
        started:false
    }

    componentDidMount() {
        this.setState({
            items: this.creazaLista()
        });
    }




    randomNumber = () => {
        return Math.floor(Math.random() * 5);
    }
    creazaLista = () => {
        const lista = [];

        for (let i = 0; i < 60; i++) {
            lista.push(this.randomNumber());
        }
        return lista;
    }

    start = (e) => {
        const newState = { ...this.state };
        newState.items = this.creazaLista();
        newState.pornesteAnimatie = true;
        newState.amount = newState.amount - 10;


        console.log("Rezultate:")
        const lista = [...newState.items];

        const linia1 = [...lista].slice(0, 20).slice(17,20);
        const linia2 = [...lista].slice(20, 40).slice(17,20);
        const linia3 = [...lista].slice(40, 60).slice(17,20);

      
        newState.rezultate.l1 = linia1;
        newState.rezultate.l2 = linia2;
        newState.rezultate.l3 = linia3;


        console.log([...lista].slice(0, 20));
        console.log(linia1);
        console.log([...lista].slice(20, 40));
        console.log(linia2);
        console.log([...lista].slice(40, 60));
        console.log(linia3);
        newState.started=true;

        this.setState(newState);


        setTimeout(() => this.setState({ pornesteAnimatie: false }), 3000)
    }



    render() {

        const lista = this.state.items;

        const lista1 = [...lista].slice(0, 20);
        const lista2 = [...lista].slice(20, 40);
        const lista3 = [...lista].slice(40, 60);
        const liste = { lista1, lista2, lista3 };





        const style = {
            position: "absolute",
            bottom: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            background: this.state.pornesteAnimatie || this.state.amount < 10 ? "red" : "green",
            padding: "10px",
            cursor: "grab"

        }
        return (
            <div className={classes.MainContainer} >
                <MoneyControl amount={this.state.amount} />
                <Slotmachine started={this.state.started} rez={this.state.rezultate} liste={liste} porneste={this.state.pornesteAnimatie} />
                <div style={style}>
                    <button disabled={this.state.pornesteAnimatie || this.state.amount < 10} onClick={this.start} >START</button>
                </div>



            </div>


        );
    }
}

export default MainContainer;