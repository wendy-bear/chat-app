import "./chatapp.css";
import React, { useState, useEffect } from "react";

function Chat() {
  let [messages, addMessage] = useState([]);
  let [text, setText] = useState("");

  //не понимаю, как зафиксировать дату для каждого рендеринга по клику

  let data = new Date();

  let newdata = data.toLocaleString();

  let messageList = messages
    .slice(0)
    .reverse()
    .map((message, index) => {
      return (
        <div key={index}>
          {newdata} : {message}
        </div>
      );
    });

  console.log(messages);

  function addMessages() {
    addMessage([...messages, text]);
  }

  return (
    <div className="wrapper">
      <input
        placeholder="введите сообщение"
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
