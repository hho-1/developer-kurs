import React from 'react'
import { useState } from 'react'

//! HTML'de label etiketinde belirtilen for attribute ü JSX'de htmlFor olarak tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılarda dahil.


const Form = () => {

    const [isim, setIsim] = useState("")
    const [pass, setPass] = useState("")
    const [country, setCountry] = useState("")

    const handleSubmit = () => {
        alert(`name: ${isim} password: ${pass} country: ${country}`)
    }

  return (
    <div className='container text-center mt-5'>
        <h1>**************************************************************</h1>
        <h1>FORM(EVENTS)</h1>

        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="username">USERNAME: <span className='text-danger fw-bold'>{isim}</span></label>
                <input className='form-control' type="text" id='username' onInput={(e)=>setIsim(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="password">PASSWORD</label>
                <input className='form-control' type="password" id='password' onChange={(e)=>setPass(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="country">COUNTRY: <span className='text-danger fw-bold'>{country}</span></label>
                <select className='form-select' name="country" id="country" onChange={(e)=>setCountry(e.target.value)}>
                    <option defaultValue="countries">Countries</option>
                    <option defaultValue="turkey">Turkey</option>
                    <option defaultValue="germany">Germany</option>
                    <option defaultValue="usa">USA</option>
                </select>
            </div>
            <button type='submit' className='btn btn-primary btn-lg mt-4'>Submit</button>
        </form>


    </div>
  )
}

export default Form
