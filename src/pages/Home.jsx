import React, {useEffect, useState} from 'react';
import Slider from "../Components/Slider";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ocean from '../assets/img/ocean2.jpg'
import Jumbotron from "../Components/UI/jumbotron/Jumbotron";
import Columns from "../Components/UI/myCard/MyCard";
import Point from "../Components/Point";
import MyCard from "../Components/UI/myCard/MyCard";
import MyCard2 from "../Components/UI/myCard2/MyCard2";
import dishes from "../assets/dishes.json"
import {json} from "react-router-dom";

const Home = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://657b74bc394ca9e4af145e99.mockapi.io/items')
            .then((res) =>  res.json())
            .then((arr) => {
                setItems(arr)
            })
    }, []);

    return (
        <>
        <Slider/>
            <Container fluid style={{ backgroundColor: 'white', color: '#fff', marginBottom: 20 }}>
                <Row>
                    <Col style={{color: 'black' , display: 'flex', justifyContent: 'center', padding: '10px' }}>
                        <p>Меню</p>
                    </Col>
                </Row>
            </Container>
            <Row>
                {items.map((obj) => (
                    <MyCard key={obj.id} {...obj} />
                ))}
            </Row>
        <Jumbotron/>
        <Point/>
        </>
    );
};

export default Home;