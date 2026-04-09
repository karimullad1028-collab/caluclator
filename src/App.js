import React from 'react';
import './App.css';
import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Use Function() instead of eval() for better security practices
        const result = new Function('return ' + display)();
        setDisplay(String(result));
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('0');
    } else {
      setDisplay((prev) =>
        prev === '0' || prev === 'Error' ? value : prev + value
      );
    }
  };

  const buttons = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '=',
    '+',
    'C',
  ];

  return (
   
    <div className="calculator"> 
      <div className="cal">calculator</div>
      <div className="display">{display}</div>
      <div className="button-grid">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className={btn === '=' ? 'equals' : btn === 'C' ? 'clear' : ''}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
