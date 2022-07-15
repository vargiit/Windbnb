import { useState } from "react";
import "./Counter.css";

function Counter(props) {
  let [counter, setCounter] = useState(0);

  const decrement = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <p className="counter-tittle">{props.childrens}</p>
      <p className="counter-subtittle">{props.children}</p>

      <div className="counter-wrapper">
        <button className="increment-btn" onClick={increment}>
          +
        </button>
        <span className="counter-number">{counter}</span>
        <button className="decrement-btn" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
