import React, { Component } from 'react';

import './Image.css';

class Image extends Component {

    render() {
        let classes = "carousel-item";
        if (this.props.position === 0) {
            classes = classes + " active";
        }

        return (
            <div className={classes}>
                <img className="d-block w-100" src={this.props.image.image_url} alt={this.props.image.name}/>
                <div className="carousel-caption d-none d-md-block">
                    <h4>{this.props.image.name}</h4>
                    <h2>{this.props.image.discount_percentage}% OFF!</h2>
                </div>
            </div>
        );
    }
};

export default Image;
