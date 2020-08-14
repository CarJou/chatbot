import React from "react";
import Icon from "./Icon";

import Fade from "react-reveal";
import Jump from "react-reveal/Jump";

const Home = ({ history }) => {
  function handleOnClick() {
    history.push("/chat");
  }
  return (
    <>
      <Icon />
      <div className="content-center">
        <Fade>
          <h1 className="titulo">No estás sola!</h1>
        </Fade>
        <Fade>
          <p className="subtitulo">
            Si sufrís violencia de género, escribinos.
          </p>
          <p className="subtitulo">
            Podemos asesorarte, asistirte y contenerte.
          </p>
          <p className="subtitulo">
            <strong> Si estás en una emergencia llamá al 911.</strong>
          </p>{" "}
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
