import React from 'react';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import ocean from '../img/ocean2.jpg'

const Styles = styled.div`
  .jumbo {
    background: url(${ocean}) no-repeat center center;
    background-size: cover;
    position: relative;
    z-index: -2;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: start;
    height: 400px;
    color: #EFEFEF;
    background-attachment: fixed;

    &:before {
      content: '';
      position: absolute;
      opacity: 0.6;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #000;
      z-index: -1;
    }
  }

  h1 {
    font-size: 2rem;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    margin: 0;
    padding-left: 2rem;
  }

  p {
    font-size: 1.25rem;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    margin: 0;
    padding: 0 2rem;
  }
`



const Jumbotron = () => {
    return (
        <Styles>
                <Container fluid className="jumbo">
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
        </Styles>
    );
};

export default Jumbotron;
