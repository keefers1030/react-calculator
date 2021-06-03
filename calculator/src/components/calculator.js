import React, { useState } from 'react'

const Calculator = () => {

  const [number, setNumber] = useState('')

  const updateNumber = (event) => {
    setNumber(event.target.value)
  }

  return(
    <div>

      <h1>Calculator</h1>
        <div class="form-group">
          <input type="text" name="search" onChange={(event) => setNumber(event.target.value)} value={number} /> 
        </div>

      <form>
        <select name="calulate" id="calculate">
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">÷</option>
        </select>
      </form>

        <div class="form-group">
          <input type="text" name="search" onChange={(event) => setNumber(event.target.value)} value={number} /> 
        </div>
        
        <button>=</button>

        <div class="form-group">
          <input type="text" name="search" onChange={(event) => setNumber(event.target.value)} value={number} /> 
        </div>
    </div>
          
  )
}

export default Calculator;