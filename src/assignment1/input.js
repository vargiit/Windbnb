import "./input.css";
function Input(props) {
  return (
    <div className="flex-container">
      <input
        className={props.className}
        type="text"
        placeholder="Placeholder"
      />
      <label className={props.className1}>Label</label>
      <p>{props.ptext}</p>
    </div>
  );
}

export default Input;
