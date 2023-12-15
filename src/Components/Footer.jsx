import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
    <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
        <Row>
            <Col style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <p>MEDINA</p>
            </Col>
        </Row>
    </Container>
);

export default Footer;