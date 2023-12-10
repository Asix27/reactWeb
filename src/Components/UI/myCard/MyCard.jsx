import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ocean from "../../../img/ocean2.jpg";

const MyCard = () => {
    return (

        <Container>
            <Row>
                <Col>
                    <Card style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                        <Card.Img variant='top/100px180' src={ocean} />
                        <Card.Body>
                            <Card.Title>WebDev blog</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni.
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                        <Card.Img variant='top' src={ocean} />
                        <Card.Body>
                            <Card.Title>WebDev blog</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni.
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                        <Card.Img variant='top' src={ocean} />
                        <Card.Body>
                            <Card.Title>WebDev blog</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, magni.
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MyCard;