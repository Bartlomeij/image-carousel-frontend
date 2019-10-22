import React, { Component } from 'react';
import axios from 'axios';

import Carousel from "../../components/Carousel/Carousel";
import Image from "../../components/Image/Image";
import SearchBar from "../../components/SearchBar/SearchBar";

class Slider extends Component {
    state = {
        images: [],
        loaded: false
    };

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this)
    }

    handler(name, discountFrom, discountTo) {
        let params = {
            discount_from: discountFrom,
            discount_to: discountTo,
        };

        if (name) {
            params.name = name;
        }

        this.updateImages({
            params: params
        });
    }

    componentDidMount() {
        this.updateImages()
    }

    updateImages(config) {
        this.setState({loaded: false});
        axios.get('http://api.imagecarousel.local/images', config).then(response => {
            if (response.data.images) {
                this.setState({images: response.data.images});
            }
            this.setState({loaded: true});
        });
    }

    render () {
        const images = this.state.images.map(function(image, key) {
            return <Image
                key={key}
                image={image}
                position={key}
            />
        });

        return (
            <div className="Slider">
                <section>
                    <SearchBar handler = {this.handler} />
                </section>
                <section>
                    <Carousel images={images} loaded={this.state.loaded} />
                </section>
            </div>
        );
    }
}

export default Slider;
