import React from 'react';
import Slider from "../Components/Slider";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ocean from '../img/ocean2.jpg'
import Jumbotron from "../Components/UI/jumbotron/Jumbotron";
import Columns from "../Components/UI/myCard/MyCard";
import Point from "../Components/Point";
import MyCard from "../Components/UI/myCard/MyCard";

const Home = () => {
    return (
        <>
        <Slider/>
        <MyCard/>
        <Jumbotron/>
        <Point/>
        </>
    );
};

export default Home;