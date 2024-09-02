import React from 'react'
import './services.css'
import { Container } from 'react-bootstrap'
import { FaLongArrowAltUp } from "react-icons/fa";

const Services = () => {
  return (
    <section id='services'>
    <Container>
    <div className="services_header">
        <h2>My Quality Services </h2>
        <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
    </div>
    <div className="services_body">
      <div className="item">

      <div className="left"><h2>01</h2></div>
      <div className="text"><p>Branding Design</p></div>
      <div className="para"><h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus possimus nulla magni iure? Atque it </h3>
      </div>
      <div className="icon"><FaLongArrowAltUp/></div>
      </div>
      <div className="item">

      <div className="left"><h2>02</h2></div>
      <div className="text"><p>Branding Design</p></div>
      <div className="para"><h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus possimus nulla magni iure? Atque it </h3>
      </div>
      <div className="icon"><FaLongArrowAltUp/></div>
      </div>
      <div className="item">

      <div className="left"><h2>03</h2></div>
      <div className="text"><p>Branding Design</p></div>
      <div className="para"><h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus possimus nulla magni iure? Atque it </h3>
      </div>
      <div className="icon"><FaLongArrowAltUp/></div>
      </div>
      <div className="item">

      <div className="left"><h2>04</h2></div>
      <div className="text"><p>Branding Design</p></div>
      <div className="para"><h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus possimus nulla magni iure? Atque it </h3>
      
      
      </div>
      <div className="icon"><FaLongArrowAltUp/></div>
      </div>
    </div>
    </Container>
    </section>
  )
}

export default Services