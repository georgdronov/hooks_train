import React, { useCallback, useState } from "react";

const CounterDisplay = React.memo(({ count, increment }) => {
  console.log("CounterDisplay rendered");
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
});
export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <CounterDisplay count={count} increment={increment} />
    </div>
  );
}
