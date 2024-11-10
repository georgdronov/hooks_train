import React, { useRef } from "react";

export default function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Focus me" />
      <button onClick={handleFocus}> Focus </button>
    </div>
  );
}
