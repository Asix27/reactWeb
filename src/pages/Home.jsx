import React from 'react';
import Slider from "../Components/Slider";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ocean from '../assets/img/ocean2.jpg'
import Jumbotron from "../Components/UI/jumbotron/Jumbotron";
import Columns from "../Components/UI/myCard/MyCard";
import Point from "../Components/Point";
import MyCard from "../Components/UI/myCard/MyCard";
import MyCard2 from "../Components/UI/myCard2/MyCard2";
import dishes from "../assets/dishes.json"

const Home = () => {
    return (
        <>
        <Slider/>
            <Container fluid style={{ backgroundColor: 'white', color: '#fff' }}>
                <Row>
                    <Col style={{color: 'black' , display: 'flex', justifyContent: 'center', padding: '10px' }}>
                        <p>Ас-мәзірі</p>
                    </Col>
                </Row>
            </Container>
            <Row>
                {dishes.map((obj) => (
                    <MyCard key={obj.id} {...obj} />
                ))}
            </Row>
        <MyCard2/>
        <Jumbotron/>
        <Point/>
        </>
    );
};

export default Home;