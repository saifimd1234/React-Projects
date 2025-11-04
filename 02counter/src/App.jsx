import { useState } from 'react'
import './App.css'

function App() {
  const counter = 15
  
  const addValue = () => {
    counter = counter + 1
    console.log(counter)
  }
  return (
    <>
      <h1>React course with saifi {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button>Remove value</button>
      <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
