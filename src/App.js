import { useState } from "react";
import "./App.css";

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

  const simpleMath = () => {
    function add() {
      return Number(firstInput) + Number(secondInput);
    }
    function substract() {
      return Number(firstInput) - Number(secondInput);
    }
    function multiply() {
      return Number(firstInput) * Number(secondInput);
    }
    function divide() {
      return Number(firstInput) / Number(secondInput);
    }
    setResult([
      `${firstInput} + ${secondInput} = ${add(firstInput, secondInput)} `,
      `${firstInput} - ${secondInput} = ${substract(firstInput, secondInput)} `,
      `${firstInput} * ${secondInput} = ${multiply(firstInput, secondInput)} `,
      `${firstInput} / ${secondInput} = ${divide(firstInput, secondInput)} `,
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
        <button onClick={simpleMath}>Do the math!</button>
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
