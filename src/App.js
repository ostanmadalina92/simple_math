import { useState } from "react";
import "./App.css";
import simpleMath from "simple_math_ij";

function App() {
  const [firstInput, setFirstInput] = useState();
  const [secondInput, setSecondInput] = useState();
  const [result, setResult] = useState([]);

  const firstHandleChange = (e) => {
    setFirstInput(e.target.value);
  };
  const secondHandleChange = (e) => {
    setSecondInput(e.target.value);
  };

  const handleClick = () => {
    setResult([
      `${firstInput} + ${secondInput} = ${simpleMath.add(
        firstInput,
        secondInput
      )} `,
      `${firstInput} - ${secondInput} = ${simpleMath.substract(
        firstInput,
        secondInput
      )} `,
      `${firstInput} * ${secondInput} = ${simpleMath.multiply(
        firstInput,
        secondInput
      )} `,
      `${firstInput} / ${secondInput} = ${simpleMath.divide(
        firstInput,
        secondInput
      )} `,
    ]);
  };

  const handleNegative = (e) => {
    if (e.target.value.match(/^\d+$/) === null) {
      e.target.value = "";
    }
  };

  return (
    <div id="container">
      <div className="items">
        <p>What is the first number? {firstInput}</p>
        <input onKeyDown={handleNegative} onChange={firstHandleChange}></input>
      </div>
      <div className="items">
        <p>What is the second number? {secondInput}</p>
        <input onKeyDown={handleNegative} onChange={secondHandleChange}></input>
      </div>
      <div className="items">
        <button onClick={handleClick}>Do the math!</button>
      </div>
      <div id="result" className="items">
        Result:
        {result.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
