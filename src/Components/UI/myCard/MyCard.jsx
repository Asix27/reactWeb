import React from 'react';
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ocean from "../../../img/ocean2.jpg";
import cl from './MyCard.module.css';
const MyCard = () => {
    return (
        <><Container fluid style={{ backgroundColor: 'white', color: '#fff' }}>
            <Row>
                <Col style={{color: 'black' , display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <p>Ас-мәзірі</p>
                </Col>
            </Row>
        </Container>
        <Container className={cl.allCard}>
            <Row>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className={cl.cardHover} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                            <Card.Img className={cl.cardImgTop} variant='top' src={ocean} />
                            <Card.Body>
                                <Card.Title>WebDev blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className={cl.rowSt}>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className={cl.cardHover} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                            <Card.Img className={cl.cardImgTop} variant='top' src={ocean} />
                            <Card.Body>
                                <Card.Title>WebDev blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className={cl.rowSt}>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className={cl.cardHover} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                            <Card.Img className={cl.cardImgTop} variant='top' src={ocean} />
                            <Card.Body>
                                <Card.Title>WebDev blog</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    );
};

export default MyCard;
