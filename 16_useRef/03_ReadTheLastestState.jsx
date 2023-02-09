import { useState, useRef } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const textRender = useRef("");

  function handleSend() {
    setTimeout(() => {
      alert("Sending: " + textRender.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          textRender.current = e.target.value;
        }}
      />
      <button onClick={handleSend}>Send</button>
    </>
  );
}
