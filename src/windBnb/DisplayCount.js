import Counter from "./Counter";
import { useState } from "react";
import "./DisplayCount.css";

function DisplayCount() {
  let [counter, setCounter] = useState(0);
  let [counter2, setCounter2] = useState(0);
  let totalGuests = counter + counter2;
  return (
    <div>
      <div className="float-container">
        <label htmlFor="guests">Guests</label>
        <input
          id="guests"
          type="text"
          value={
            totalGuests > 0
              ? totalGuests > 1
                ? totalGuests + " guests"
                : totalGuests + " guest"
              : ""
          }
        />
      </div>
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
