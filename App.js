import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [calculate, setCalculate] = useState(false);

  const operators = ['*', '/', '+', '-', '.'];

  const createNumbers = () => {
    const digits = [];
    for(let i = 1; i < 10; i++) {
      digits.push(<button key={i} className='btn' onClick={() => updateDisplay(i)}>{i}</button>);
    };
    return digits;
  };

  const updateDisplay = (value) => {
    if(operators.includes(value) && display === '' ||
      operators.includes(value) && operators.includes(display.slice(-1))) {
      return;
    }
    setDisplay(display + value);
  }

  const deleteDisplay = () => {
    setDisplay('');
  }

  const calcDisplay = () => {
    setDisplay(eval(display));
    setCalculate(true);
    if(calculate = true) {
      return display;
    }
  }

  return (
    <div className='calculator'>
    <div className='display'>{display || 0}</div>
    <div className='operators'>
      <button className='ops' onClick={() => updateDisplay('*')}>*</button>
      <button className='ops' onClick={() => updateDisplay('/')}>/</button>
      <button className='ops' onClick={() => updateDisplay('+')}>+</button>
      <button className='ops' onClick={() => updateDisplay('-')}>-</button>
      <button className='ops' onClick={deleteDisplay}>DEL</button>
    </div>
    <div className='btns'>
      {createNumbers()}
      <button className='btn bottom-left'>0</button>
      <button className='btn'>.</button>
      <button className='btn bottom-right' onClick={calcDisplay}>=</button>
    </div>
  </div>
  );  
};

export default App;