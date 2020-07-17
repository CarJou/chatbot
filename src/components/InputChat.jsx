import React from "react";
import "../css/InputChat.css";

const InputChat = ({ sendMessage, getMessage }) => {
  return (
    <form onSubmit={(e) => sendMessage} className="chat-input-container">
      <input
        placeholder="Escribi tu nombre"
        type="text"
        onChange={(e) => getMessage(e.target.value)}
      />
      <button type="submit" />
    </form>
  );
};

export default InputChat;
