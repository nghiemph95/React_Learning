import { useState } from "react";

export default function SyncedInputs() {
  const [sync, setSync] = useState("");

  /** Parent receive data from children */
  // const handleChange = (value) => {
  //   setSync(value);
  // }
  return (
    <>
      <Input
        label="First input"
        text={sync}
        onChange={(value) => setSync(value)}
      />
      <Input
        label="Second input"
        text={sync}
        onChange={(value) => setSync(value)}
      />
    </>
  );
}

function Input({ label, text, onChange }) {
  //const [text, setText] = useState('');

  /** Transfer data to component parent */
  function handleChange(e) {
    if (!onChange) return;
    onChange(e.target.value);
  }

  return (
    <label>
      {label} <input value={text} onChange={handleChange} />
    </label>
  );
}
