import React from 'react'
import girl from "../assets/images/girl.gif";

function handleOnClick(){
console.log('me estoy ejecutando')
}
const Icon = () => {
    return ( 
        <div className="girl-container">
            <img className="girl" src={girl} alt="girl"/>
            <label className="subtitle">Si sufris violencia de genero y no podes hablar por telefono, chateanos. Podemos asesorarte, asistirte y contenerte</label>
            <button onClick={handleOnClick}>Holi</button>
        </div>
     );
}
 
export default Icon;