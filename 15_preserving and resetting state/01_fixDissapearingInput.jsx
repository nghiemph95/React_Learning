import { useState } from "react";

export default function App() {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      <p>{showHint && <i>Hint: Your favorite city?</i>}</p>

      <Form />

      <button
        onClick={() => {
          setShowHint((x) => !x);
        }}
      >
        {showHint ? "Hide" : "Show"}
      </button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState("");
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}
