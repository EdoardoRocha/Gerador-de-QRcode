import React, { useState } from "react";
import qrious from "qrious";
import '../components/Input.css';


function QRcodeGenerator() {
    const [qrCode, setQrcode] = useState('')
    
    const data = {
        qrious: new qrious({size: 300}),
        text: `${qrCode}`
    }


    const newQrcode = () => {
    
        if(data.text) {
            
            data.qrious.value = data.text
            return data.qrious.toDataURL()
            
        } else {
            return
        }

    }


    

    return (
        <React.Fragment>
            

            <div className="inputCamp">
                <input type="text" 
                    size="25"
                    placeholder="Digite aqui seu desejo..."
                    className="Input"
                    value={qrCode}
                    onChange={e => setQrcode(e.target.value)}
                />
            </div>


            <img src={newQrcode()} alt="" className="qrimage" />
        </React.Fragment>
    )

}


export default QRcodeGenerator