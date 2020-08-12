import React, { useState, useEffect } from "react";
import "../css/Chat.css";
import IconItem from "./IconItem";
import UserItem from "./UserItem";
import InputChat from "./InputChat";
import Select from "./Select";
import { info, map } from "../data/Actions";

const Chat = () => {
  let idCounter = 0;

  const [msg, setMsg] = useState({});

  const [openSelect, setOpenSelect] = useState(false);

  const [chat, setChat] = useState([
    {
      id: 0,
      emmiter: "Woman",
      msg: ["Hola!", " Cuál es tu nombre?"]
    }
  ]);

  function firstResponse(name) {
    let newChat = {
      //+2 porque es probable que useeffect no me actualice el contador
      id: idCounter + 2,
      emmiter: "Woman",
      msg: [
        name +
          ", si estás en una emergencia llamá de inmediato al 911. De lo contrario, elegí una opcion para que podamos ayudarte o asesorarte :)",
        "Soy un bot en desarrollo, eso quiere decir que aun no estoy preparada para preguntas especificas. Lo que no significa que no pueda ayudarte"
      ]
    };
    //actualizo mi estado de chat
    if (newChat) {
      setChat([...chat, newChat]);
    }
  }
  //espera una funcion anonima y un efecto
  useEffect(() => {
    //cuando el chat tiene dos objetos automaticamente  recibe una funcion anonima
    if (chat.length === 2) {
      setTimeout(() => firstResponse(msg.msg), 500);
      setMsg({ ...msg, msg: " " });
      setTimeout(() => setOpenSelect(true, 600));
    }
  }, [chat]);

  function getMessage(value) {
    idCounter = idCounter + 1;
    setMsg({
      id: idCounter,
      emmiter: "User",
      msg: value
    });
  }

  //evita que se refresque la pantalla
  function sendMessage(e) {
    e.preventDefault();
    //"push al array de objeto"
    setChat([...chat, msg]);
  }
  console.log("chat:", chat);
  console.log("msg:", msg);

  let options = [
    { id: "Denuncia", text: "Como denunciar en cuarentena" },
    { id: "mapa", text: "Donde estan los centros de atencion para mujeres?" }
  ];

  const [interactions, setInteractions] = useState([]);
  function handleSelectedOptions(value) {
    let result;
    switch (value) {
      //id de options
      case "Denuncia":
        result = info[Math.floor(Math.random() * info.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;

      case "mapa":
        result = map[Math.floor(Math.random() * map.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;
      default:
        console.log("no hay valores");
    }
  }
  console.log("interactions", interactions);
  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div className="chatbot-chat-container-body">
            {chat.map((message, index) =>
              message.emmiter === "Woman" ? (
                <IconItem key={index} text={message.msg} />
              ) : (
                <UserItem key={index} text={message.msg} />
              )
            )}

            {openSelect && (
              <Select
                handleSelectedOptions={handleSelectedOptions}
                options={options}
              />
            )}
          </div>
          <div className="chatbot-chat-container-input">
            <InputChat
              msg={msg}
              getMessage={getMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
