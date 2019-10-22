import React, { Component } from 'react';

import './Carousel.css';
import Loader from "../Loader/Loader";

class Carousel extends Component {
    render() {
        if (!this.props.loaded) {
            return (
                <Loader />
            );
        };

        return (
            <section className="Carousel">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        { this.props.images }
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
        );
    }
};

export default Carousel;
