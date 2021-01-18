import React, { useState, useEffect } from "react";
import "../css/Chat.css";
import IconItem from "./IconItem";
import UserItem from "./UserItem";
import InputChat from "./InputChat";
import Select from "./Select";
import { opA, opB, opC } from "../data/Actions";
import Fade from "react-reveal/Fade";
import woman from "../assets/images/woman.png";
import Nav from "./Nav";

const Chat = () => {
  let idCounter = 0;
  //cada msj es un obejto
  const [msg, setMsg] = useState({});  
  const [openSelect, setOpenSelect] = useState(false);
  const [chat, setChat] = useState([
    {
      id: 0,
      emmiter: "Woman",
      msg: ["Hola!", " Cuál es tu nombre?"]
    }
  ]);

  //se ejecuta cuando tenga que volver a renderizarse porque hay un cambio 
  function firstResponse(name) {
    let newChat = {
      //+2 porque es probable que useeffect no me actualice el contador
      id: idCounter + 2,
      emmiter: "Woman",
      msg: [
        name +
          ", si estás en una emergencia llamá de inmediato al 911. De lo contrario, elegí una opcion para que podamos ayudarte o asesorarte :)",
        "Soy un bot en desarrollo, eso quiere decir que no estoy preparada para preguntas específicas. Lo que no significa que no pueda asesorarte"
      ]
    };
    //actualizo mi estado de chat
    if (newChat) {
      setChat([...chat, newChat]);
    }
  }
  //espera una funcion anonima y un efecto
  //cuando el chat tiene dos objetos automaticamente recibe una funcion anonima
//setMsg -> msg "" para que noa aprezca el nombre en el input una vez enviado
  useEffect(() => {
    switch (chat.length) {
      case 2:
        setTimeout(() => firstResponse(msg.msg), 500);
        setMsg({ ...msg, msg: "" });
        setTimeout(() => setOpenSelect(true), 600);
        break;
    }
  }, [chat]);

  //recibe valor con id
  //
  function getMessage(value) {
    idCounter = idCounter + 1;
    setMsg({
      id: idCounter,
      emmiter: "User",
      msg: value
    });
  }

  //InputChat. (e) Evita que se refresque la pantalla
  function sendMessage(e) {
    e.preventDefault();
    //Actualiza array de objeto
    setChat([...chat, msg]);
  }

  let options = [
    { id: "Denuncia", text: "Como denunciar en cuarentena" },
    { id: "mapa", text: "Hogares y refugios" },
    { id: "violencia", text: "Cuántos tipos de violencias existen?" }
  ];

  const [interactions, setInteractions] = useState([]);
  function handleSelectedOptions(value) {
    let result;
    switch (value) {
      //id de options
      case "Denuncia":
        result = opA[Math.floor(Math.random() * opA.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;

      case "mapa":
        result = opB[Math.floor(Math.random() * opB.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;
      case "violencia":
        result = opC[Math.floor(Math.random() * opC.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;
      default:
        console.log("no hay valores");
    }
  }

  return (
    <>
      <Nav />
      <div className="chatbot-chat-container">
        <div className="chatbot-chat-content">
          <div className="chatbot-chat">
            <div className="chatbot-chat-container-body">
              <div className="chatbot-chat-body">
                {/* se necesita index para iterar */}
                {chat.map((message, index) =>
                  message.emmiter === "Woman" ? (
                    <IconItem key={index} text={message.msg} />
                  ) : (
                    <UserItem key={index} text={message.msg} />
                  )
                )}
                {openSelect && (
                  <>
                    {" "}
                    <Fade right>
                      <Select
                        handleSelectedOptions={handleSelectedOptions}
                        options={options}
                      />{" "}
                    </Fade>
                  </>
                )}
                {/* +0 xa ya no es un array vacio */}
                {interactions.length > 0 &&
                  interactions.map((interaction, index) => (
                    <>
                      <Fade left>
                        <IconItem key={index} text={interaction} />
                      </Fade>
                      <Fade right>
                        <div className="chatbot-chat-select-container">
                          <Select
                            key={index}
                            handleSelectedOptions={handleSelectedOptions}
                            options={options}
                          />
                          <img src={woman} alt="woman icon" />
                        </div>
                      </Fade>
                    </>
                  ))}
              </div>
            </div>
            <div className="chatbot-chat-container-input">
              <InputChat
                chat={chat}
                msg={msg}
                getMessage={getMessage}
                sendMessage={sendMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
