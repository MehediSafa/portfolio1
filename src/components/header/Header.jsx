import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import logo from '../../assets/logo.webp'
import './header.css'

const header = () => {
  return (
    <section id='menu'>
        <Container>
        <Navbar expand="lg" className=" menu_bg">
      <Container>
        <Navbar.Brand href="#home" className='logo'><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto links">
            <Nav.Link href="#services" >Services</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#home">Resume</Nav.Link>
            <Nav.Link href="#link">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            
            <a href="" className='hire_me'>Hire Me! </a>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>

    </section>
  )
}

export default header