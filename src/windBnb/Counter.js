import "./counter.css";

function Counter({ title, children, counter, setCounter }) {
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
      <p className="counter-tittle">{title}</p>
      <p className="counter-subtittle">{children}</p>

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
