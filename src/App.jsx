import { useState } from 'react'
import React from 'react' 
import Mapa from './componentes/Mapa'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card'>
          
          <Mapa />
          
      </div>
    
    </>
  )
}

export default App
