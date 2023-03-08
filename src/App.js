import React, { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (e) => {
    if (input === "0") {
      setInput(e.target.textContent);
    } else {
      setInput(input + e.target.textContent);
    }
  };

  const handleOperatorClick = (e) => {
    let currString = result + input,
      len = currString.length;

    if (
      e.target.textContent !== "-" &&
      len > 0 &&
      "+*-/".includes(currString[len - 1])
    ) {
      while ("+*-/".includes(currString[len - 1])) {
        currString = currString.slice(0, len - 1);
        len = len - 1;
      }
    }

    setResult(currString + e.target.textContent);
    setInput("");
  };

  const handleDecimalClick = () => {
    if (!input.includes(".")) {
      setInput(input + ".");
    }
  };

  const handleClearClick = () => {
    setInput("0");
    setResult("");
  };

  const handleEqualClick = () => {
    try {
      setResult(eval(result + input).toString());
      setInput("");
    } catch (error) {
      setResult("Invalid Calculation");
    }
  };

  return (
    <div className="app">
      <div id="calculator">
        {console.log(result, input)}
        <div id="display">{result + input}</div>
        <button id="clear" onClick={handleClearClick}>
          AC
        </button>
        <button id="divide" onClick={handleOperatorClick}>
          /
        </button>
        <button id="multiply" onClick={handleOperatorClick}>
          *
        </button>
        <button id="seven" onClick={handleNumberClick}>
          7
        </button>
        <button id="eight" onClick={handleNumberClick}>
          8
        </button>
        <button id="nine" onClick={handleNumberClick}>
          9
        </button>
        <button id="subtract" onClick={handleOperatorClick}>
          -
        </button>
        <button id="four" onClick={handleNumberClick}>
          4
        </button>
        <button id="five" onClick={handleNumberClick}>
          5
        </button>
        <button id="six" onClick={handleNumberClick}>
          6
        </button>
        <button id="add" onClick={handleOperatorClick}>
          +
        </button>
        <button id="one" onClick={handleNumberClick}>
          1
        </button>
        <button id="two" onClick={handleNumberClick}>
          2
        </button>
        <button id="three" onClick={handleNumberClick}>
          3
        </button>
        <button id="decimal" onClick={handleDecimalClick}>
          .
        </button>
        <button id="zero" onClick={handleNumberClick}>
          0
        </button>
        <button id="equals" onClick={handleEqualClick}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
