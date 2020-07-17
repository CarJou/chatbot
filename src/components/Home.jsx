import React from "react";
import Icon from "./Icon";
//import Footer from "./Footer";
import Fade from "react-reveal";
import Jump from "react-reveal/Jump";

const Home = ({ history }) => {
  function handleOnClick() {
    history.push("/chat");
  }
  return (
    <>
      <Icon />
      <div class="content-center">
        <Fade>
          <h1>No estás sola!</h1>
        </Fade>
        <Fade>
          <p>
            Si sufrís violencia de género y no podés hablar por teléfono,
            escribinos. Podemos asesorarte, asistirte y contenerte.
          </p>
        </Fade>

        <Jump>
          <button onClick={handleOnClick} className="primary">
            Chat
          </button>
        </Jump>
      </div>
    </>
  );
};

export default Home;
