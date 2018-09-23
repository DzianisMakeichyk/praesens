import React, { Component } from 'react';
import SubMenuItem from '../Sub-item'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css'

class MenuItem extends Component {
    state = {
      subMenuStatus: this.props.menuItem.subMenuShow
    };
    props: [ 'menuItem' ];

    handelSubMen= () => {
        this.setState({
            subMenuStatus: !this.state.subMenuStatus
        });
    };

    render() {
        const props = this.props;
        const state = this.state;

        let subMenu;
        if(props.menuItem.subMenu) {
            subMenu =
                props.menuItem.subMenu.map(item =>
                    <SubMenuItem SubItem={item} key={item} ></SubMenuItem>
                )
        }

        return (
            <div className="menu__item">
                {props.menuItem.link ? <a className="menu__point" href={props.menuItem.link}>{props.menuItem.name}</a> : <p className="menu__point" onMouseOver={this.handelSubMen} >{props.menuItem.name}</p>}
                <ReactCSSTransitionGroup
                    transitionName="sub-menu"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        {state.subMenuStatus && (
                            <div className="menu-sub">
                                <div className="menu-sub__wrapper">
                                    {subMenu}
                                </div>
                                <div className={`menu-sub__promo ${state.subMenuStatus ? ' is-active': ''}`}>

                                </div>
                            </div>
                        )}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default MenuItem;
