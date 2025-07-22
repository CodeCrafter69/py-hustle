import React, { useState } from 'react'; 
 
 // Step 2: Create a state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  // Step 3: Functions to handle button clicks
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(count - count);

  return (
    <>  
    <div style={{ textAlign: 'center', marginTop: '50px', color: 'gray'}}>
      <h1>Counter App</h1>
      <p style={{ fontSize: '48px' }}>{count}</p>
      <button onClick={decrement} style={{ fontSize: '20px', marginRight: '10px', color: 'green', backgroundColor: 'black', borderRadius: '5px'}}>−</button>
      <button onClick={increment} style={{ fontSize: '20px', color: 'green', backgroundColor: 'black', borderRadius: '5px' }}>+</button>
      <button onClick={reset} style={{fontSize: '20px', marginLeft: '10px', color: 'red', backgroundColor: 'black', borderRadius: '5px'}}>reset</button>
    </div>
    </>
  )