import "./chatapp.css";
import React, { useState, useEffect } from "react";

function Chat() {
  let [messages, addMessage] = useState([]);
  let [text, setText] = useState("");
  let [name, setName] = useState("");

  let messageList = messages
    .slice(0)
    .reverse()
    .map((message, index) => {
      return (
        <div key={index} className={index === 0 && "colorred"}>
          {message.time} - {message.name} : {message.text}
        </div>
      );
    });

  function addMessages() {
    let data = new Date();
    let newdata = data.toLocaleString();

    let newMessage = {
      name: name,
      text: text,
      time: newdata,
    };
    addMessage([...messages, newMessage]);
  }

  return (
    <div className="wrapper">
      <input
        id="name"
        placeholder="имя"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        id="text"
        placeholder="сообщение"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button className="btn-send" onClick={addMessages}>
        Отправить
      </button>
      <div className="message">{messageList}</div>
    </div>
  );
}
export default Chat;
