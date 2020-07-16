import React from 'react';
import Icon from './Icon'

const Home = ({history}) => {

    function handleOnClick() {
        history.push('/chat');
   }
    return ( 
        <>
        <div className="home-container">
            <div className="home-content">
        <Icon/>
        <h1>No estás sola!</h1>
        <label>
        Si sufrís violencia de género y no podés hablar por teléfono, escribinos.
        Podemos asesorarte, asistirte y contenerte.
      </label>
      <button onClick={handleOnClick}>Chat</button>
      </div>
      </div>
      </>
     );
}
 
export default Home;

