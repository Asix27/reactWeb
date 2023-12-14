import React from 'react';
import { Card, Col } from "react-bootstrap";
import ocean from "../../../assets/img/ocean2.jpg";
import cl from './MyCard.module.css';

function MyCard({ id, imageUrl, titles, price }) {
    return (
        <Col md={3} className={cl.col}>
            <Card className={cl.cardHover} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Card.Img className={cl.cardImgTop} variant='top' src={ocean} />
                <Card.Body>
                    <Card.Title>{titles}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default MyCard;
