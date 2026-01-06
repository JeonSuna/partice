import { useRef, useState } from "react";

export const Ref = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleUp = () => {
    setCount((pre) => pre + 1);
  };

  const handleRefUp = () => {
    countRef.current = countRef.current + 1;
  };
  console.log("렌더링");
  return (
    <div id="counter">
      <p>state {count}</p>
      <p>countRef {countRef.current}</p>
      <button onClick={handleUp} className="bg-red-300 mb-2">
        state증가
      </button>
      <br></br>
      <button onClick={handleRefUp} className="bg-red-300 active:bg-gr-600">
        Ref 증가
      </button>
    </div>
  );
};
