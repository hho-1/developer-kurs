import React from 'react'
import { Container } from 'react-bootstrap'
import resim from '../img/notFound.jpeg'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
  let navigate = useNavigate();
  return (
    <Container className='d-flex flex-column align-content-center justify-content-center'>

     <img src={resim} alt="" width="700px"/>
     <button onClick={() => navigate('/')} className='btn-danger btn-lg w-25'>GO HOME</button>

    </Container>
  )
}

export default NotFound