import { useState, useEffect, useCallback } from "react";

const Example1 = () => {
  const [count, setCount] = useState(0);

  const doStuff = useCallback(() => {
    console.log("doing stuff");
  }, [])

  useEffect(() => {
    doStuff();
  }, [doStuff]);

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="px-8 py-2 m-4 text-white bg-yellow-400"
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
      <div className="text-2xl text-yellow-600">{count}</div>
    </div>
  );
};

export default Example1;
