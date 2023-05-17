import React, { Component } from "react";

export default class Padre extends Component {

    state = {
        contador: 0,
    }

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })}


    render(){
            return(
            <>
            <h1> Comunicacion entre componentes </h1>
            <Hijo mensaje = "HOLA MUNDOuuuuu"/>
            <Hijo incrementarContador = {this.incrementarContador} contador={this.state.contador} mensaje = "Estas son mis pros"/>
            <Hijo3  incrementarContador = {this.incrementarContador} contador={this.state.contador} mensaje = "mi hijo numero 3 el 2 no se q se hizo"/>
            </>
        )

    }

}



function Hijo(props) {
    return (
    <div>
    <h4>{props.mensaje}</h4>
    
   <h1>   conteo: {props.contador} </h1>
   <button onClick={props.incrementarContador}> +</button>
    </div>)
}

function Hijo3(props){
    return(
        <div style={{background : "red"}}>
             <h4>{props.mensaje}</h4>
             <h1>   conteo: {props.contador} </h1>
        <button onClick={props.incrementarContador}> +</button>
        </div>
    )
}