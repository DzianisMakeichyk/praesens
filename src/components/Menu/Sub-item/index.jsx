import React, { Component } from 'react';
import './style.css'

class MenuItem extends Component {
    props: [ 'SubItem' ];
    render() {
        const props = this.props;

        return (
            <div className="menu-sub__item">
                {props.SubItem}
            </div>
        )
    }
}

export default MenuItem;
