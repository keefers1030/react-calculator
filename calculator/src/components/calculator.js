import React, { useState } from 'react'

const Calculator = () => {

  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [total, setTotal] = useState('')
  const [operator, setOperator] = useState('')

  const calculate = () => {
    switch (operator) {
      case '+':
        return setTotal((parseFloat(number1) + parseFloat(number2)))
      case '-':
        return setTotal((number1 - number2))
      case '*':
        return setTotal((number1 * number2))
      case '÷':
        return setTotal((number1 / number2))
      default:
        break;
    }

  }

  return(
    <div>

      <h1>react calculator</h1>
        <div className="form-group">
          <input 
            type="number" 
            value={number1} 
            onChange={event => setNumber1(event.target.value)} /> 
        </div>

      <select className="operator" onChange={event => setOperator(event.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="÷">÷</option>
      </select>

        <div className="form-group">
          <input 
            type="number" 
            value={number2} 
            onChange={event => setNumber2(event.target.value)} /> 
        </div>
        

        <div className="answer">
          <button onClick={calculate}>=</button>
          <h2>{total}</h2>
        </div>


    </div>
          
  )
}

export default Calculator;