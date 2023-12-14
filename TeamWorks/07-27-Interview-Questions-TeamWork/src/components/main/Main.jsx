import React, { useState } from 'react'
import './main.css'
import {arrowup, arrowdown} from '../../helpers/icons'

const Main = ({id, question, answer}) => {

    const [acik, setAcik] = useState(false)

  return (
    <div className='main'>

        {
            acik ? (
                <section className='question-answer acik'>
                    <div className='question-and-button'>
                        <h5 className='question'>{id}. {question}</h5>
                        <button onClick={() => setAcik(false)}>{arrowup}</button>
                    </div>
                    <p>{answer}</p>
                </section>
            ) 
            : (
                <section className='question-answer'>
                    <div className='question-and-button'>
                        <h5 className='question'>{id}. {question}</h5>
                        <button onClick={() => setAcik(true)}>{arrowdown}</button>
                    </div>
                </section>
            )
        }
        
    </div>
  )
}

export default Main