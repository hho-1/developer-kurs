import React from 'react'
import Cards from './Cards'
import veri from '../../helpers/Data'
import "./Main.scss"

const Main = () => {
  return (
    <div className='container'>
        
        {veri.map((card, index) => (
            <Cards {...card} key={index}/>
        ))}
    </div>
  )
}

export default Main