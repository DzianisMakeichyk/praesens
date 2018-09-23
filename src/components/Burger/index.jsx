import React, { Component } from 'react';
import './style.css'

class Burger extends Component {
    props: [ 'visibleMenu' ];

    render() {
        return (
            <div className="burger-container">
                <div className={`burger-box ${this.props.visibleMenu ? ' is-click': ''}`}>
                    <div className="burger"></div>
                </div>
            </div>
        )
    }
}

export default Burger;
