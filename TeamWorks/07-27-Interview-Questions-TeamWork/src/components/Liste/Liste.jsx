import React from 'react'
import Main from '../main/Main'
import '../main/main.css'

const Liste = ({data}) => {
  return (
    <div className='liste'>
        {data.map((item) => (<Main {...item}/>))}
    </div>
  )
}

export default Liste