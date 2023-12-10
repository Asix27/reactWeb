import React from 'react';
import './slider.module.css'
const Slider = () => {
    return (
        <div id="home">
            <div id="da-slider" className="da-slider">
                <div className="triangle"></div>
                <div className="mask"></div>
                <div className="container">
                    <div className="da-slide">
                        <h2 className="fittext2">СКИДКА! НУЖНО БРАТЬ!</h2>
                        <h4>Кроссовки Dunk Low "Red Panda"</h4>
                        <p>Кроссовки Nike Dunk Low Red Panda долгое время были основным продуктом среди любителей кроссовок. Nike выделяет представителя семейства Панд и выводит ситуацию на новый уровень.</p>
                        <a href="#" className="da-link button">Read more</a>
                        <div className="da-img">
                            <img src="../../../img/2.jpg" alt="image01" width={320}/>
                        </div>
                    </div>
                    <div className="da-slide">
                        <h2>ВСЕ ЕЩЕ ДУМАЕШЬ? НУЖНО БРАТЬ!</h2>
                        <h4>Кроссовки A's 1090 V2 Beige</h4>
                        <p>Asics GEL - 1090 v2 - эти кроссовки представляют собой объединение стиля и функциональности, что делает их отличным
                            выбором не только для спорта, но и для повседневной жизни.</p>
                        <a href="#" className="da-link button">Read more</a>
                        <div className="da-img">
                            <img src="../../../img/11.jpg" width={320} alt="image02"/>
                        </div>
                    </div>
                    <div className="da-slide">
                        <h2>СКИДКА! ЗАЖДАЛИСЬ ТЕБЯ!</h2>
                        <h4>Кроссовки Yeezy Boost 700</h4>
                        <p>adidas Yeezy Boost 700 — третий по счету силуэт, вышедший под эгидой сотрудничества adidas и Канье Уэста. Всего за несколько сезонов Yeezy Boost 700 прошли путь от модели в стиле ретро
                            до ультрасовременного гибрида.</p>
                        <a href="#" className="da-link button">Read more</a>
                        <div className="da-img">
                            <img src="../../../img/333.jpg" width={320} alt="image03"/>
                        </div>
                    </div>
                    <div className="da-arrows">
                        <span className="da-arrows-prev"></span>
                        <span className="da-arrows-next"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;