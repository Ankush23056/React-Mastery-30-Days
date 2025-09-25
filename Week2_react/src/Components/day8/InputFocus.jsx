import React, {useRef} from "react";

const InputFocus = () => {
  let inputRef = useRef(null);

  let handleInput = () => {
    inputRef.current.focus();
    console.log("focused");
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      <button onClick={handleInput}>Click to select</button>
    </div>
  );
};

export default InputFocus;
