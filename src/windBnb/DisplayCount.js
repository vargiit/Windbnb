import Counter from "./Counter";
import { useState } from "react";

function DisplayCount() {
  let [counter, setCounter] = useState(0);
  let [counter2, setCounter2] = useState(0);
  return (
    <div>
      <label htmlFor="guests"></label>
      <input id="guests" type="text" value={counter + counter2} />
      <Counter childrens="Adults" counter={counter} setCounter={setCounter}>
        Age 13 or above
      </Counter>
      <Counter childrens="Children" counter={counter2} setCounter={setCounter2}>
        Age 2-12
      </Counter>
    </div>
  );
}

export default DisplayCount;
