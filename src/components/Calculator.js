import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleEvent = (e) => {
    setState({ ...state, ...calculate(state, e.target.name) });
  };

  return (
    <div className="calculator">
      <div className="display">
        <span>{state.total}</span>
        <span>{state.operation}</span>
        <span>{state.next}</span>
      </div>
      <div className="figures">
        <button type="button" className="clear num" name="AC" onClick={handleEvent}>AC</button>
        <button type="button" className="ad num" name="+/-" onClick={handleEvent}>+/-</button>
        <button type="button" className="modulo num" name="%" onClick={handleEvent}>%</button>
        <button type="button" className="divide operator" name="÷" onClick={handleEvent}>÷</button>
        <button type="button" className="num" name="7" onClick={handleEvent}>7</button>
        <button type="button" className="num" name="8" onClick={handleEvent}>8</button>
        <button type="button" className="num" name="9" onClick={handleEvent}>9</button>
        <button type="button" className="clear operator" name="x" onClick={handleEvent}>x</button>
        <button type="button" className="num" name="4" onClick={handleEvent}>4</button>
        <button type="button" className="num" name="5" onClick={handleEvent}>5</button>
        <button type="button" className="num" name="6" onClick={handleEvent}>6</button>
        <button type="button" className="clear operator" name="-" onClick={handleEvent}>&ndash;</button>
        <button type="button" className="num" name="1" onClick={handleEvent}>1</button>
        <button type="button" className="num" name="2" onClick={handleEvent}>2</button>
        <button type="button" className="num" name="3" onClick={handleEvent}>3</button>
        <button type="button" className="add operator" name="+" onClick={handleEvent}>+</button>
        <button type="button" className="zero" name="0" onClick={handleEvent}>0</button>
        <button type="button" className="num" name="." onClick={handleEvent}>.</button>
        <button type="button" className="equals operator" name="=" onClick={handleEvent}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
