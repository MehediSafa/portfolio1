import React from 'react'
import './works.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import works1 from '../../assets/works1.webp'
import works2 from '../../assets/works2.webp'
import works3 from '../../assets/works3.webp'
import works4 from '../../assets/works4.webp'
import { Container } from 'react-bootstrap';



var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
const Works = () => {
  return (
   <section id='works'>
        <div className="works_header">
            <h2>My Recent Works</h2>
        </div>

        <div className="slick">
            <Container>
            <Slider {...settings}>
      <div>
        <div className="item">
        <img src={works1} alt="" />
        <div className="text">
            <h2>Seabstian</h2>
        </div>
        </div>
      </div>
      <div className="item">
        <h3><img src={works2} alt="" /></h3>
      </div>
      <div className="item">
        <h3><img src={works3} alt="" /></h3>
      </div>
      <div className="item">
        <h3><img src={works4} alt="" /></h3>
      </div>
      
    </Slider>
            </Container>
        </div>
   </section>
  )
}

export default Works