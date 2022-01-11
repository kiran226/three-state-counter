import React,{useState} from 'react';
import './App.css'

function App(){
  const [count,setCount] = useState(0);
  return(
    <div className='App'>
      <header>
        <h1>Counter App using state/hooks</h1>
      </header>

      <h2>Current value of state is {count}</h2>
      <button onClick={() => setCount(0) }>Reset the count</button>
      <button onClick={() => count>10 ? "" : setCount(count+1) }>Increase the count</button>
      <button onClick={() => count<=0 ? "" : setCount(count-1)} >Decrease the count</button>
    </div>
  )
}
export default App;