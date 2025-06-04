import React, { useRef, useState } from "react";

export default function PreValue() {
  const [value, setValue] = useState("");
  const preValue = useRef("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    preValue.current = value;
    setValue(e.target.value);
  }

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>이전 값 : {preValue.current}</p>
    </div>
  );
}
