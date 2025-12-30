import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
import Navbar from './components/navbar.jsx'

function App() {
  

  return (
    
    <div className='parent'>
     
      <Card user='aman' age={18}/>
      <Card user='rohit' age={20}/>
      <Card user='shyam' age={22}/>
    </div>
    
  )
}

export default App
