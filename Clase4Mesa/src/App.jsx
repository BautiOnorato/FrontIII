import React from 'react'
import Clase from './components/Clase'
import Funcional from './components/Funcional'
import './App.css'

function App() {
  const prop = "Soy un prop";
  const objetoRandom = {
    randomFuncional: "Soy un prop funcional",
    randomClase: "Soy un prop de clase",
  }
  return (
    <>
      <Clase objeto={objetoRandom.randomClase}/>
      <Funcional objeto={objetoRandom.randomFuncional}/>
    </>
  )
}

export default App
