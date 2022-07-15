import "./button.css";
function Button(props) {
  return (
    <div className="buttonContainer">
      <p>{props.ptext}</p>
      <button
        disabled={props.disabled}
        className={props.className}
        children={props.children}
      ></button>
    </div>
  );
}
export default Button;

// button code in <APP><div className="App">
// <h1> Buttons </h1>
// <Button ptext="<Button / >">Default</Button>
// <Button className="outline" ptext="<Button variant=”outline” />">
//   Default
// </Button>
// <Button className="text" ptext="<Button variant=”text” />">
//   Default
// </Button>
// <Button className="disableShadow" ptext="<Button disableShadow />">
//   Default
// </Button>
// <div className="two">
//   <Button className="text-disabled" disabled ptext="<Button disabled />">
//     Disabled
//   </Button>
//   <Button disabled ptext="<Button variant=”text” disabled />">
//     Disabled
//   </Button>
// </div>

//
// <h1> Buttons </h1>
//       <Button ptext="<Button / >">Default</Button>
//       <Button className="outline" ptext="<Button variant=”outline” />">
//         Default
//       </Button>
//       <Button className="text" ptext="<Button variant=”text” />">
//         Default
//       </Button>
//       <Button className="disableShadow" ptext="<Button disableShadow />">
//         Default
//       </Button>
//       <div className="two">
//         <Button className="text-disabled" disabled ptext="<Button disabled />">
//           Disabled
//         </Button>
//         <Button disabled ptext="<Button variant=”text” disabled />">
//           Disabled
//         </Button>
//       </div>

//       <h1>Inputs</h1>
//       <Input
//         className="input"
//         paceholder="Placeholder"
//         ptext="<Input />"
//         className1="blue-label"
//       ></Input>
//       <Input
//         className="error"
//         paceholder="Placeholder"
//         ptext="<Input error />"
//         className1="error-label"
//       ></Input>
