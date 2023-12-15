import React from 'react';
import { Card, Col, Button } from "react-bootstrap";
import cl from './MyCard.module.css';

function MyCard({ id, imageUrl, titles, price, text }) {
    return (
        <Col md={3} className={cl.col}>
            <Card className={cl.cardCustom}>
                <Card.Img className={cl.cardImgTop} variant='top' src={imageUrl} />
                <Card.Body>
                    <Card.Title className={cl.cardTitle}>{titles}</Card.Title>
                    <Card.Text className={cl.cardText}>
                        {text}
                    </Card.Text>
                    {/* Кнопка, которая появляется при наведении */}
                </Card.Body>
                <Button variant="warning" className={cl.buyButton}>Купить</Button>{' '}
            </Card>
        </Col>
    );
}

export default MyCard;
