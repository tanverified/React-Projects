import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <h1 className="heading">Counter with Hook</h1>
      <div className="section">
        <span className="count">{count}</span>
      </div>
      <div className="m-5">
        <button
          className="btn btn-red mr-1"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
        <button
          className="btn btn-blue ml-1"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
        <button
          className="btn btn-green ml-1"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter;
