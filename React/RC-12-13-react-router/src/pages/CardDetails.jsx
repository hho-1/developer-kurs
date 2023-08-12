import React from 'react'
import { useParams } from 'react-router-dom'

import data from "../data"

const CardDetails = () => {

  const {isim} = useParams()

  //data = data.filter((a)=>a.name === isim)
  return (
    <div>
      {data.map((i) => i.name === isim && (
        <div>
          <h1>{i.name}</h1>
          <h2>{i.text}</h2>
        </div>
      ))}
    </div>
  )
}

export default CardDetails