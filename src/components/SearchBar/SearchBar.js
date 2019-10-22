import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
    state = {
        name: '',
        discountFrom: 0,
        discountTo: 100
    };

    render () {
        return (
            <section className="SearchBar">
                <div className="SearchBarInput">
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                </div>
                <div className="SearchBarInput">
                    <label>Discount From</label>
                    <input type="number"  min="0" max="100" value={this.state.discountFrom} onChange={(event) => this.setState({discountFrom: event.target.value})} />
                </div>
                <div className="SearchBarInput">
                    <label>Discount To</label>
                    <input type="number"  min="0" max="100" value={this.state.discountTo} onChange={(event) => this.setState({discountTo: event.target.value})} />
                </div>
                <div className="SearchButton">
                    <button onClick={(event) => this.props.handler(this.state.name, this.state.discountFrom, this.state.discountTo)}>Search</button>
                </div>
                <div className="ClearFix"></div>
            </section>
        );
    }
}

export default SearchBar;
