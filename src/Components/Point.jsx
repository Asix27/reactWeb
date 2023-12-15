import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import mesto from "../assets/img/mesto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse, faPhone, faUtensils} from "@fortawesome/free-solid-svg-icons";
import instaQR from "../assets/img/insta.jpeg"
import whatsappQR from "../assets/img/whatsapp.jpeg"



const Point = () => {
    return (
        <Container style={{ marginBottom: '30px', marginTop: '30px' }}>
            <Row>
                <Col md={7}>
                    <img src={mesto} height={400} border={5} style={{ borderRadius: 10 }} alt="error" />
                </Col>
                <Col md={5} style={{ color: 'white', display: 'flex', flexDirection: 'column', justifyContent: "center"}}>
                    <h2 style={{}}>О нас</h2>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem' }}>
                        <FontAwesomeIcon icon={faUtensils} style={{ marginRight: '10px', fontSize: '1.5rem' }} />
                        <p style={{ margin: 0}}>Кафе MEDINA</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem' }}>
                        <FontAwesomeIcon icon={faHouse} style={{ marginRight: '10px', fontSize: '1.5rem' }} />
                        <p style={{ margin: 0 }}>Адрес: Жолбарыс 15</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem' }}>
                        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px', fontSize: '1.5rem' }} />
                        <p style={{ margin: 0 }}>Контакты:  8 747 440 82 85</p>
                    </div>
                    <div style={{ display: 'flex', marginRight: '200px' }}>
                        <img src={instaQR} alt="Instagram QR" style={{ maxWidth: '50%', height: 100, margin: '0 auto', marginRight: '200px' }} />
                        <img src={whatsappQR} alt="WhatsApp QR" style={{ maxWidth: '30%', height: 100, margin: '0 auto'}} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Point;
