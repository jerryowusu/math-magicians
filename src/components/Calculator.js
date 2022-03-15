import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="calculator">
        <Display />
        <Button />
      </div>
    );
  }
}

export default Calculator;
