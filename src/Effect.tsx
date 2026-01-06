import { useEffect, useState } from "react";

export const Effect = () => {
  const [count, setCount] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const handleUp = () => {
    setCount((pre) => pre + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  useEffect(
    () => console.log("렌더링될때마다,업데이트된 count ", count),
    [count]
  );
  return (
    <div>
      <div className="flex  gap-2 items-center">
        <button
          onClick={handleUp}
          className=" border-red-300 border bg-white p-2"
        >
          update
        </button>
        <p>{count}</p>
      </div>
      <input
        type="text"
        className="bg-amber-200"
        value={name}
        onChange={handleInputChange}
      />
      <span>{name}</span>
    </div>
  );
};
