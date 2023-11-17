import React from 'react'
import { useState } from 'react'
import { FaApple, FaReact} from "react-icons/fa"
import { Gi3DGlasses} from "react-icons/gi"

const MouseKeyboard = () => {

    const [xCoordinate, setXCoordinate] = useState(0)
    const [yCoordinate, setYCoordinate] = useState(0)
    const [klavyeYazilan, setKlavyeYazilan] = useState("")

    const mouseOlayi = (e) => {
        setXCoordinate(e.pageX)
        setYCoordinate(e.pageY)
    }
    const keyDownOlayi = (e) => {
        /* if(e.keyCode >= 48 && e.keyCode <= 57) alert("Rakam girdiniz. Lütfen harf giriniz.")
        else alert(`Tebrikler, ${e.key} yazdiniz.`) */
    }

  return (
    <div className='text-center container mt-5 d-flex flex-column align-items-center'>
        <h1>***************************************************************</h1>
        <h2 className='text-danger'>MOUSE EVENTS</h2>

        <p>X and Y</p>
        <p className='fw-bold text-danger fs-3'>X:{xCoordinate} Y:{yCoordinate}</p>
        <div className='bg-success text-light w-50 p-4' onMouseMove={mouseOlayi}>COORDINATES <FaApple/> <FaReact/> <Gi3DGlasses/> </div>
        <div>
            <h2 className='mt-4 text-danger'>
            KEYBOARD - CLIPBOARD EVENTS <span className='text-info'>{klavyeYazilan}</span>
            </h2>
            <input onChange={(e)=> setKlavyeYazilan(e.target.value)} onKeyDown={keyDownOlayi} type="text" className='form-control'/>
        </div>
    </div>
  )
}

export default MouseKeyboard
