import React from 'react';
import { Container } from 'react-bootstrap';
import classes from './App.module.css';

const Jumbotron = () => {
    return (
                <Container fluid className={classes.jumbo}>
                    <h1>Web Developer Blog</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
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
                        incidunt, inventore ipsum iusto libero nobis sint veniam.</p>
                </Container>
    );
};

export default Jumbotron;
