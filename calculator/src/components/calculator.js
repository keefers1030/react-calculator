import React, { useState } from 'react'

const Calculator = () => {

  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)


  return(
    <div>

      <h1>Calculator</h1>
        <div class="form-group">
          <input 
            type="number" 
            placeholder="0" 
            value={number1} 
            onChange={event => setNumber1(event.target.value)} /> 
        </div>

      <form>
        <select name="calculate" id="calculate">
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">÷</option>
        </select>
      </form>

        <div class="form-group">
          <input 
            type="number" 
            placeholder="0" 
            value={number2} 
            onChange={event => setNumber2(event.target.value)} /> 
        </div>

        <button>=</button>

        <div class="form-group">
          <input type="number" name="search" /> 
        </div>
    </div>
          
  )
}

export default Calculator;