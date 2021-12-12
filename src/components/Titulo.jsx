import React from "react";
import './Titulo.css';


function Titulo(props) {
    return (
    <React.Fragment>
        <h1>{props.texto}</h1>
        <h3>{props.subtitle}</h3>
    </React.Fragment>
    )
}


export default Titulo;