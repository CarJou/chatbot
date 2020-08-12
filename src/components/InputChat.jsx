import React from "react";
import "../css/InputChat.css";

const InputChat = ({ sendMessage, getMessage, msg }) => {
  return (
    <form onSubmit={(e) => sendMessage(e)} className="chat-input-container">
      <input
        placeholder="Escribi tu nombre"
        //reseteo el dato
        value={msg.msg}
        type="text"
        onChange={(e) => getMessage(e.target.value)}
      />
      <button type="submit" />
    </form>
  );
};

export default InputChat;
