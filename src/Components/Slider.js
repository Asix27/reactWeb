import React from 'react';
import {Carousel} from "react-bootstrap";
import ocean from '../img/ocean.jpg'

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item style={{height: '600px'}}>
                <img
                    className='d-block w-100'
                    src={ocean}
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
                    src={ocean}
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
                    src={ocean}
                    alt='first slide'
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;