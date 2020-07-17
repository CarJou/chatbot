import React, { useState } from "react";
import "../css/Chat.css";
import IconItem from "./IconItem";
import UserItem from "./UserItem";
import InputChat from "./InputChat";

const Chat = () => {
  let idCounter = 0;

  const [msg, setMsg] = useState({});

  const [chat, setChat] = useState([
    {
      id: 0,
      emmiter: "Woman",
      msg: ["Hola!", " Cuál es tu nombre?"]
    }
  ]);

  function getMessage(value) {
    idCounter = idCounter + 1;
    setMsg({
      id: idCounter,
      emmiter: "user",
      msg: value
    });
  }

  function sendMessage(e) {
    e.preventDefault();
    setChat([...chat, msg]);
  }
  console.log("chat:", chat);
  console.log("msg:", msg);
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
          </div>
          <div className="chatbot-chat-container-input">
            <InputChat getMessage={getMessage} sendMessage={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
