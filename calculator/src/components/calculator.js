import React, { useState } from 'react'

const Calculator = () => {

  const [number, setNumber] = useState('')

  return(
    <div>
      <h1>Calculator</h1>
            <div class="form-group">
                <label class="num1">Number:</label>
              <input type="text" name="search" onChange={(event) => setNumber(event.target.value)} value={number} /> 
            </div>
    </div>
          
  )
}

export default Calculator;