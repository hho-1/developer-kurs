import React from 'react'

const Msg = ({isim, telefon}) => {
  
    //const {isim, telefon} = props
  
    return (
    
        <div>
            <h3 style={{color:'red'}}>Benim adim {isim}.</h3>
            <h3 style={{color:'red'}}>Telefon numaram {telefon}.</h3>
        </div>
    )
}

export default Msg