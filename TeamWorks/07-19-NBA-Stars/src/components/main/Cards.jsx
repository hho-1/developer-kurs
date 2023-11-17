import React from 'react'
import { useState } from 'react'

const Cards = ({img, name, statistics}) => {

    const [show, setShow] = useState(true)
    const handleClick = () => {
        setShow(!show)
    }
  return (
    <div className='cards' onClick={handleClick}>
        {show ? (<img src={img} alt={name} />) : (
            <ul className='details'>
            {statistics.map((veri, index) => {

                return <li key={index}>🏀{veri}</li>
            })}
        </ul>
        )}
        
        <div className='names'>
        <h4>{name}</h4>
        </div>
        
        
    </div>
  )
}

export default Cards