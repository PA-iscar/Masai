import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(3);

  const handleChange = (val) => setCounter(counter + val);
  const double = () => setCounter(counter * 2);
  return (
    <div className="counter">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleChange(1)}>Increment</button>
      <button onClick={() => handleChange(-1)}>Decrement</button>
      <button onClick={() => double()}>Double</button>
    </div>
  );
};

export default Counter;
