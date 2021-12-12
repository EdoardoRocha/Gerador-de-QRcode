import React from "react";
import QRcodeGenerator from '../core/QRcode'
import './App.css'

import Titulo from "../components/Titulo";

function App() {
    return (
        <div className="container">
            <Titulo texto="Gerador de QRcode" subtitle="Feito em ReactJS" />
            <QRcodeGenerator />
        </div>
    )
}


export default App;