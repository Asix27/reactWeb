import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';



const Users = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div id="home">
            <FontAwesomeIcon icon={icon({name: 'user-secret'})} />
            <FontAwesomeIcon icon={icon({name: 'coffee'})} />
            <FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
            <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={faUserSecret} />

        </div>
    );
};

export default Users;
