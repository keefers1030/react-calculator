import React, { useState } from 'react'

const Calculator = () => {

  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [total, setTotal] = useState('')
  const [operator, setOperator] = useState('')


  const calculate = () => {
    const operation = {operator}
    switch (operation) {
      case '+':
        let total= (number1 + number2)
        return total
      case '-':
        return setTotal((number1 - number2))
      case '*':
        return setTotal((number1 * number2))
      case '÷':
        return setTotal((number1 / number2))
      default:
        break;
    }
    console.log(number1)
    console.log(number2)
    console.log(total)

  }

  return(
    <div>

      <h1>react calculator</h1>
        <div className="form-group">
          <input 
            type="number" 
            placeholder="0" 
            value={number1} 
            onChange={event => setNumber1(event.target.value)} /> 
        </div>

      <form>
        <select name="operator" value = {operator} id="operator" onChange={event => setOperator(event.target.value)}>
          <option value='+'>+</option>
          <option value='-'>-</option>
          <option value='*'>*</option>
          <option value='÷'>÷</option>
        </select>
      </form>

        <div className="form-group">
          <input 
            type="number" 
            placeholder="0" 
            value={number2} 
            onChange={event => setNumber2(event.target.value)} /> 
        </div>

        <button onClick={calculate}>=</button>
        

        <h2 value={total}>{total}</h2>
    </div>
          
  )
}

export default Calculator;