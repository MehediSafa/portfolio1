import React from 'react'
import './together.css'
import { Col, Container, Row } from 'react-bootstrap'

const Together = () => {
  return (
    <section id='contact'>
        <Container>
            <div className="contact_main">
            <Row>
            <Col lf={6}>
            <div className="contact_left">
                <h2>Let's Work Together!</h2>
            </div>
            </Col>

            <Col lf={6}>
            <div className="contact_right">

            </div>
            </Col>
            </Row>
            
            </div>
        </Container>
    </section>
  )
}

export default Together