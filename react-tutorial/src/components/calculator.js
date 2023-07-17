import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  function handleClick(buttonName) {
    const solution = calculate(state, buttonName);
    setState({
      total: solution.total,
      next: solution.next,
      operation: solution.operation,
    });
  }

  const { total, next, operation } = state;

  return (
    <div className="calculator">
      <div className="screen">
        <div className="previous-operate">{next ? total : operation || ''}</div>
        <div className="current-operate">{next || total}</div>
      </div>
      <Button type="button" text="AC" clickEvent={() => handleClick('AC')} />
      <Button type="button" text="+/-" clickEvent={() => handleClick('+/-')} />
      <Button type="button" text="%" clickEvent={() => handleClick('%')} />
      <Button type="button" text="÷" className="box-color" clickEvent={() => handleClick('÷')} />

      <Button type="button" text="7" clickEvent={() => handleClick('7')} />
      <Button type="button" text="8" clickEvent={() => handleClick('8')} />
      <Button type="button" text="9" clickEvent={() => handleClick('9')} />
      <Button type="button" text="x" className="box-color" clickEvent={() => handleClick('x')} />

      <Button type="button" text="4" clickEvent={() => handleClick('4')} />
      <Button type="button" text="5" clickEvent={() => handleClick('5')} />
      <Button type="button" text="6" clickEvent={() => handleClick('6')} />
      <Button type="button" text="-" className="box-color" clickEvent={() => handleClick('-')} />

      <Button type="button" text="1" clickEvent={() => handleClick('1')} />
      <Button type="button" text="2" clickEvent={() => handleClick('2')} />
      <Button type="button" text="3" clickEvent={() => handleClick('3')} />
      <Button type="button" text="+" className="box-color" clickEvent={() => handleClick('+')} />

      <Button type="button" text="0" className="span-box" clickEvent={() => handleClick('0')} />

      <Button type="button" text="." clickEvent={() => handleClick('.')} />
      <Button type="button" text="=" className="box-color" clickEvent={() => handleClick('=')} />
    </div>
  );
}

export default Calculator;