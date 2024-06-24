import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/navbar/Nav'
import Main from './components/main/Main'
import Brandslider from './components/main/Brandslider'
import Review from './components/main/Review'
import "./index.css"
import Accelerate from './components/main/Accelerate'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Main />
    </div>
  )
}

export default App
