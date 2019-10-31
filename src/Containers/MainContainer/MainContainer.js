import React, { Component } from "react";
import MoneyControl from "../../Components/MoneyControl/MoneyControl";
import classes from "./MainContainer.module.css";
import Slotmachine from "../Slotmachine/Slotmachine";



class MainContainer extends Component {
    state = {
        pornesteAnimatie: false,
        items: [],
        amount: 100

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

        this.setState(newState);

        setTimeout(() => this.setState({ pornesteAnimatie: false }), 3000)
    }



    render() {

        const lista = this.state.items;

        const lista1 = [...lista].slice(0, 20);
        const lista2 = [...lista].slice(20, 40);
        const lista3 = [...lista].slice(40, 60);
        const liste = { lista1, lista2, lista3 };
        //rezultate
        console.log("Rezultate:")
        const linia1rez1=lista1[lista1.length-3];
        const linia2rez1=lista2[lista2.length-3];
        const linia3rez1=lista3[lista3.length-3];
       const linia1=[linia1rez1,linia2rez1,linia3rez1];
       console.log(linia1);


        const linia1rez2=lista1[lista1.length-2];
        const linia2rez2=lista2[lista2.length-2];
        const linia3rez2=lista3[lista3.length-2];

        const linia2=[linia1rez2,linia2rez2,linia3rez2];
       console.log(linia2);

        const linia1rez3=lista1[lista1.length-1];
        const linia2rez3=lista2[lista2.length-1];
        const linia3rez3=lista3[lista3.length-1];

        const linia3=[linia1rez3,linia2rez3,linia3rez3];
        console.log(linia3);



        const style = {
            position: "absolute",
            
            left: "50%",
            transform: "translateX(-50%)",
            background: this.state.pornesteAnimatie ||this.state.amount<10 ? "red" : "green",
            padding: "10px",
            cursor: "grab"

        }
        return (
            <div className={classes.MainContainer} >
                <MoneyControl amount={this.state.amount} />
                <Slotmachine liste={liste} porneste={this.state.pornesteAnimatie} />
                <div style={style}>
                    <button disabled={this.state.pornesteAnimatie || this.state.amount<10} onClick={this.start} >START</button>
                </div>



            </div>


        );
    }
}

export default MainContainer;