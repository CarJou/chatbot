import React from "react";
import "../css/InputChat.css";

const InputChat = ({ sendMessage, getMessage, msg, chat }) => {
  return (
    <form className="chat-input-container" onSubmit={(e) => sendMessage(e)}>
      <input
        disabled={chat.length >= 3 ? true : false}
        placeholder={
          chat.length >= 3 ? "Ya no podés escribir..." : "Escribí tu nombre"
        }
        value={msg.msg}
        type="text"
        onChange={(e) => getMessage(e.target.value)}
      />
      {chat.length >=3 ? "" : <button type="submit" />}
      
    </form>
  );
};

export default InputChat;
