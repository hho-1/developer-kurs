import React from 'react'
import './Counter.css'

const Counter = () => {
  return (
    <div>
      <h2 className="counter-header"> Counter With Redux</h2>
      <h1> </h1>
      <h2> </h2>
      <div>
        <button className="counter-button positive">ARTTIR</button>
        <button className="counter-button negative">AZALT</button>
        <button className="counter-button zero">RESET</button>
      </div>
    </div>
  )
}

export default Counter