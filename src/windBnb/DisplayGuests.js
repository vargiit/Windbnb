import Counter from "./counter";
import { useState } from "react";

function DisplayGuests() {
  let [adultCount, setAdultCount] = useState(0);
  let [childCount, setChildCount] = useState(0);
  let totalGuests = adultCount + childCount;
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
      <Counter title="Adults" counter={adultCount} setCounter={setAdultCount}>
        Age 13 or above
      </Counter>
      <Counter title="Children" counter={childCount} setCounter={setChildCount}>
        Age 2-12
      </Counter>
    </div>
  );
}

export default DisplayGuests;
