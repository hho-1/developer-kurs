import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import logo from '../img/logo.png'
import { Link, NavLink } from 'react-router-dom'
import "../css/navbar.css"

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='nav-container'>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink style={({isActive})=>({color:isActive && "red"})} className='nav-link' to="/">Home</NavLink>
            <NavLink style={({isActive})=>({color:isActive && "red"})} className='nav-link' to="/teacher">Teacher</NavLink>
            <NavLink style={({isActive})=>({color:isActive && "red"})} className='nav-link' to="/courses">Courses</NavLink>
            <NavLink style={({isActive})=>({color:isActive && "red"})} className='nav-link' to="/contact">Contact</NavLink>
            <NavLink style={({isActive})=>({color:isActive && "red"})} className='nav-link' to="/github" target='blank'>GitHub</NavLink>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar