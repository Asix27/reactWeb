import React from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import kafe1 from '../assets/img/kafe11.jpg'
import kafe2 from '../assets/img/kafe22.jpg'
import kafe3 from '../assets/img/kafe33.jpeg'

const Slider = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item style={{height: '600px'}}>
                <img
                    className='d-block w-100'
                    src={kafe1}
                    alt='first slide'
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height: '600px'}}>
                <img
                    className='d-block w-100'
                    src={kafe2}
                    alt='first slide'
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height: '600px'}}>
                <img
                    className='d-block w-100'
                    src={kafe3}
                    alt='first slide'
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Container fluid style={{ backgroundColor: '#192930', height: 3}}>
            <Row>
                <Col style={{color: 'black' , display: 'flex', justifyContent: 'center', padding: '10px' }}>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Slider;