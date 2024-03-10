import { useState } from "react";
import './Calculator.css';
function Calculator({ values }) {
  const [Input, Setinput] = useState("");
  function InputAdd(value1) {
    if (value1 === "=") {
      ShowOutput();
    } else if (value1 === "AC") {
      Clear();
    } else {
      Setinput(Input + value1);
    }
  }
  function ShowOutput() {
    try {
       const result=eval(Input)
      Setinput(result.toString());
    } catch (error) {
      console.log(error);
    }
  }
  function Clear() {
    Setinput("");
  }
  return (
    <div className="Full-calcultor">
      <div className="inside">
      <div className="Input">
        <input type="input" className="input" value={Input} disabled></input>
      </div>
      <div className="button-input">  
        {Array.isArray(values) &&
          values.map((value) => {
            return (
              <button key={value.value} className="buttons" onClick={() => InputAdd(value.value)}>
                {value.value}
              </button>
            );
          })}
      </div>
      </div>
    </div>
  );
}
export default Calculator;
