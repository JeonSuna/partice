import { useEffect, useRef, useState } from "react";

export const Ref = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert("ref DOM에 접근하기 성공");
  };
  return (
    <div id="counter">
      <input type="text" ref={inputRef} className="border border-active" />
      <button className="bg-red-300 active:bg-gr-600" onClick={login}>
        login
      </button>
    </div>
  );
};
