import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ocean from "../assets/img/ocean2.jpg";

const Point = () => {
    return (
        <Container style={{marginBottom: '30px', marginTop: '30px'}}>
            <Row>
                <Col md={7}>
                    <img src={ocean} height={400} alt={"error"}/>
                </Col>
                <Col md={5}>
                    <h2>Web Developer Blog</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aperiam cum dolor eveniet in labore perferendis
                        praesentium reprehenderit voluptas. Adipisci animi assume
                        cum cumque debitis, deserunt dignissimos doloribus earum
                        exercitationem facilis fugiat in iusto magnam modi mollitia
                        nemo nihil nisi nulla officiis perferendis perspiciatis quam quas,
                        quia quod quos reprehenderit rerum tempore vel vitae voluptatum?
                        Assumenda autem dignissimos dolorum illo quis, unde voluptates.
                        Accusamus accusantium architecto consequatur culpa deleniti
                        deserunt dolorem, doloremque doloribus dolorum ea et excepturi
                        ipsum laudantium magnam nulla numquam officiis, pariatur possimus
                        provident ratione temporibus vitae, voluptas? Cumque dolores impedit
                        incidunt, inventore ipsum iusto libero nobis sint veniam.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Point;