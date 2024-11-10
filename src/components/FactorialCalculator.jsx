import React, { useState, useMemo } from "react";

const calculateFactorial = (num) => {
  console.log("Calculating factorial of", num);
  if (num < 0) return -1;
  if (num === 0) return 1;
  return num * calculateFactorial(num - 1);
};

export const FactorialCalculator = (props) => {
  const [number, setNumber] = useState(0);
  const [otherValue, setOtherValue] = useState("");

  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>Factorial: {factorial}</p>

      <input
        type="text"
        value={otherValue}
        onChange={(e) => setOtherValue(e.target.value)}
      />
    </div>
  );
};
