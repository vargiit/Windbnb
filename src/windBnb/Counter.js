import { useState } from "react";
import "./Counter.css";

function Counter(props) {
  let [counter, setCounter] = useState(0);

  // onClick={setCounter((prev) => prev + 1)}>
  // onClick={setCounter((prev) => prev - 1)}
  return (
    <div>
      <p className="counter-tittle">{props.childrens}</p>
      <p className="counter-subtittle">{props.children}</p>

      <div className="counter-wrapper">
        <button
          className="increment-btn"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          +
        </button>
        <span className="counter-number">{counter}</span>
        <button
          className="decrement-btn"
          onClick={() => setCounter((prev) => prev - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
