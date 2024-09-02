import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import bannerImg from '../../assets/bannerimg.webp';
import './Banner.css';
import { IoMdDownload } from 'react-icons/io'; // Import the icon here
import { GrFacebookOption } from 'react-icons/gr';
import { FaLinkedin } from 'react-icons/fa';
import { CiTwitter } from 'react-icons/ci';

const Banner = () => {
  return (
    <section id='banner'>
      <div className="banner_main">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="banner_left">
                <Card>
                  <Card.Body>
                    <Card.Title>I am Gerold</Card.Title>
                    <h3>Web Developer</h3>
                    <h4>UX Designer</h4>
                    <p>I break down complex user experience problems to create integrity focused solutions that connect billions of people</p>
                    <div className="card_bottom">
                      <div className="download">
                        <Card.Link href="#">Download CV <span><IoMdDownload /></span></Card.Link>
                      </div>
                      <div className="icons"> 
                        <a href=""><GrFacebookOption/></a> 
                        <a href=""><FaLinkedin /></a>
                        <a href=""><CiTwitter /></a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={6}>
              <div className="banner_img">
                <img src={bannerImg} alt="Banner" />
              </div>
            </Col>
          </Row>

          <Row>
            <div className="banner_bottom">

            <Col lg={3}>
              <div className="item">
                <div className="number"><h2>14</h2></div>
                <div className="text"><p>Years of
                Experience</p></div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="item">
                <div className="number"><h2>50
                +</h2></div>
                <div className="text"><p>Project
                Completed</p></div>
              </div>
            </Col>

            <Col lg={3}>
              <div className="item">
                <div className="number"><h2>1.5
                K</h2></div>
                <div className="text"><p>Happy
                Clients</p></div>
              </div>
            </Col>

            <Col lg={3}>
              <div className="item">
                <div className="number"><h2>14</h2></div>
                <div className="text"><p>Years of
                Experience</p></div>
              </div>
            </Col>
            </div>

          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Banner;
