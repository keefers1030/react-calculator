import React, { useState } from 'react'

const Calculator = () => {

  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [total, setTotal] = useState('')
  const [operator, setOperator] = useState('')

  const calculate = () => {
    switch (operator) {
      case '+':
        return setTotal(parseFloat(number1) + parseFloat(number2))
      case '-':
        return setTotal(parseFloat(number1) - parseFloat(number2))
      case '*':
        return setTotal(parseFloat(number1) * parseFloat(number2))
      case '÷':
        return setTotal(parseFloat(number1) / parseFloat(number2))
      default:
        break;
    }
  }

  return(
    <div>
        <h1>React Calculator</h1>

        <div className="form-group">
          <input 
            type="number" 
            value={number1} 
            onChange={event => setNumber1(event.target.value)} /> 

            <select className="operator" onChange={event => setOperator(event.target.value)}>
              <option value="Click">Click</option>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="÷">÷</option>
            </select>

            <input 
              type="number" 
              value={number2} 
              onChange={event => setNumber2(event.target.value)} /> 

            <button onClick={calculate}>=</button>
                    </div>

            <h2 className="total">{total}</h2>
  </div>
          
  )
}

export default Calculator;