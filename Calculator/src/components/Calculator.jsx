import { useState } from "react";

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const operators = ["+", "-", "*", "/"];
    const OPERATOR_CHECK = /[+\-*/]$/;

    const handleNumberClick = (num) => {
        setInput((prevInput) => {

            if(prevInput === "0" && num === 0) {
                return prevInput;
            }

            if(prevInput === "0") {
                return String(num)
            }

            return prevInput + num;
        });
    }

    const handleEquals = () => {
        try {
            const result = Function(`return ${input}`)();
            setResult(parseFloat(result.toFixed(10)));
        } catch {
            setResult("Error occured!");
        }
    }

    const handleOperatorClick = (op) => {
        if (!input || OPERATOR_CHECK.test(input)) {
            return;
        }
        setInput((prevInput) => prevInput + op);
    }

    const handleDecimalClick = () => {
        const lastNumber = input.split(/[-+*/]/).pop();

        if (lastNumber.includes(".")) {
            return;
        }

        setInput((prevInput) => prevInput + ".");
    }

    const handleClear = () => {
        setInput("");
        setResult(0);
    }

    return (
        <div className="calculator">
            <div className="display">{result || input || "0"}</div>

            <div className="buttons">
                <button onClick={handleClear} className="clear">C</button>
                <button onClick={() => handleOperatorClick("/")}>/</button>
                <button onClick={() => handleOperatorClick("*")}>*</button>
                <button onClick={() => handleOperatorClick("-")}>-</button>

                {[7, 8, 9].map((num) => (
                    <button key={num} onClick={() => handleNumberClick(num)}>{num}</button>
                ))}
                <button onClick={() => handleOperatorClick("+")}>+</button>

                {[4, 5, 6].map((num) => (
                    <button key={num} onClick={() => handleNumberClick(num)}>{num}</button>
                ))}
                <button onClick={handleDecimalClick}>.</button>

                {[1, 2, 3].map((num) => (
                    <button key={num} onClick={() => handleNumberClick(num)}>{num}</button>
                ))}
                <button onClick={handleEquals} className="equals">=</button>

                <button onClick={() => handleNumberClick(0)} className="zero">0</button>

            </div>
        </div>
    )
}

            export default Calculator;