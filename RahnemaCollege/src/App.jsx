import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Game.jsx'
import Game from './Game.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <label htmlFor="">تعداد نفرات را وارد کنید</label>
        <input type="text" /> */}
        <Game/>
      </div>
        
      
    </>
  )
}

export default App
