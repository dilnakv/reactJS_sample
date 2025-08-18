
import { useRef } from "react";
import InputField from "./InputField";

export const ForwardRefInput = () => {
   const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reusable Input with Focus Control</h2>
       <InputField ref={inputRef} placeholder="Type here..." />
      <br />
      <button onClick={focusInput} style={{ marginTop: "10px" }}>
        Focus Input
      </button>
    </div>
  );
}
