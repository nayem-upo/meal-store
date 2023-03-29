import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Foods from './Components/Foods/Foods'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <div className="App">
      <Foods></Foods>
    </div>
    </div>
  )
}

export default App;
