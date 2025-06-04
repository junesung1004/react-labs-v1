import React, { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    // 포커스를 어떻게?
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="입력..." />
      <button onClick={handleFocus}>포커스 주기</button>
    </div>
  );
}
