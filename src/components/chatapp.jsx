import "./chatapp.css";
import React, { useState } from "react";

function Chat() {
  let [send, showSend] = useState("");

  let data = new Date();
  console.log(data);
  let newdata = data.toLocaleString();
  console.log(newdata);

  //  function messageSend() {
  //    return <div className="message">{send}</div>;
  //  }

  return (
    <div className="wrapper">
      <input
        placeholder="введите сообщение"
        value={send}
        onChange={(event) => showSend(event.target.value)}
      />
      <button className="btn-send">Отправить</button>
      <div className="message">{newdata + ":  " + send}</div>
    </div>
  );
}
export default Chat;
