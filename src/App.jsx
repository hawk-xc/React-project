import './App.css'
import DisplayBox from './components/DisplayBox'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <div className='container'>
          <h1>React Display Box</h1>
          <DisplayBox />
        </div>  
      </>
  );
}

export default App
