import React from 'react';
import Button from './Button';
import Display from './Display';

const Calculator = () => (
  <div className="bg-primary calculator">
    <Display />
    <div className="buttons">
      <Button />
    </div>

  </div>
);

export default Calculator;
