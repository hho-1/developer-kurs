import React from 'react'
import { useState } from 'react'

const Hooks = () => {
  
    const [count, setCount] = useState(0)

    const artir = () => {
        setCount(count+1)
    }

    const ilkDeger = {
        isim:'Habip', 
        email:'habip@gmail.com', 
        yas: 36, 
        renk: 'blue'
    }

    const [kisi, setKisi] = useState(ilkDeger)

    const changeKisi = () => {
        
        if(kisi.isim == 'Habip'){
            setKisi({
                isim:'Abdullah', 
                email:'abdullah@gmail.com', 
                yas: 50, 
                renk: 'red'
            })
        }
        else{
            setKisi(ilkDeger)
        }
    }
  
    return (
    <div className='container text-center'>
        <h2>*******************************************************</h2>
        <h1>UseState</h1>
        <h2>COUNT: <span>{count}</span></h2>

        <button className='btn btn-primary btn-lg' onClick={artir}>Artir</button>    
        <button className='btn btn-info btn-lg' onClick={()=>setCount(count-1)}>Azalt</button>
        <button className='btn btn-danger btn-lg' onClick={()=>setCount(0)}>Sifirla</button>

        <h1>*********************************************************</h1>
        <div className='text-center mt-4'>
            <h1>Object ile useState kullanimi</h1>
            <h2>{kisi.isim}</h2>
            <h4>{kisi.email}</h4>
            <h4>{kisi.yas}</h4>

            <button style={{backgroundColor: kisi.renk, color: "white"}} className='btn btn-lg' onClick={changeKisi}>CHANGE</button>
        </div>
    </div>
  )
}

export default Hooks