import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent = ((buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  })

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calculator">
        <div className="display">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <div className="figures">
          <button type="button" className="clear num" name="AC" onClick={(e) => this.handleEvent(e.target.name)}>AC</button>
          <button type="button" className="ad num" name="+/-" onClick={(e) => this.handleEvent(e.target.name)}>+/-</button>
          <button type="button" className="modulo num" name="%" onClick={(e) => this.handleEvent(e.target.name)}>%</button>
          <button type="button" className="divide operator" name="÷" onClick={(e) => this.handleEvent(e.target.name)}>÷</button>
          <button type="button" className="num" name="7" onClick={(e) => this.handleEvent(e.target.name)}>7</button>
          <button type="button" className="num" name="8" onClick={(e) => this.handleEvent(e.target.name)}>8</button>
          <button type="button" className="num" name="9" onClick={(e) => this.handleEvent(e.target.name)}>9</button>
          <button type="button" className="clear operator" name="x" onClick={(e) => this.handleEvent(e.target.name)}>x</button>
          <button type="button" className="num" name="4" onClick={(e) => this.handleEvent(e.target.name)}>4</button>
          <button type="button" className="num" name="5" onClick={(e) => this.handleEvent(e.target.name)}>5</button>
          <button type="button" className="num" name="6" onClick={(e) => this.handleEvent(e.target.name)}>6</button>
          <button type="button" className="clear operator" name="-" onClick={(e) => this.handleEvent(e.target.name)}>&ndash;</button>
          <button type="button" className="num" name="1" onClick={(e) => this.handleEvent(e.target.name)}>1</button>
          <button type="button" className="num" name="2" onClick={(e) => this.handleEvent(e.target.name)}>2</button>
          <button type="button" className="num" name="3" onClick={(e) => this.handleEvent(e.target.name)}>3</button>
          <button type="button" className="add operator" name="+" onClick={(e) => this.handleEvent(e.target.name)}>+</button>
          <button type="button" className="zero" name="0" onClick={(e) => this.handleEvent(e.target.name)}>0</button>
          <button type="button" className="num" name="." onClick={(e) => this.handleEvent(e.target.name)}>.</button>
          <button type="button" className="equals operator" name="=" onClick={(e) => this.handleEvent(e.target.name)}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
