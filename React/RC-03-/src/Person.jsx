import React from 'react'
import Msg from './Msg';

const Person = (props) => {
  
    console.log(props);

    const {name, resim, tel} = props
  
    return (
    <div>
        <h2>{name}</h2>
        <h4>{tel}</h4>
        <img src={resim} alt="" />

        <Msg isim = {name} telefon={tel}/>
        
    </div>
  )
}

export default Person