import { useState } from "react";

const heavyWork = () => {
  console.log("무거운 작업");
  return ["길동이", "김방구"]; //초기값
};

export const State = () => {
  const [name, setName] = useState(() => heavyWork());
  const [input, setInput] = useState("");

  const handleInput = (pre) => {
    setName((pre) => {
      //   console.log(pre);
      return [input, ...name];
    });
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="w-50 bg-red-400"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleInput} className="w-10 bg-active">
        버튼
      </button>
      <p>{name}</p>
    </div>
  );
};
