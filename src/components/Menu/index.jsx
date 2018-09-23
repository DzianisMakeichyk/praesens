import React, { Component } from 'react';
import Burger from '../Burger'
import MenuItem from './Item'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css'

class Menu extends Component {
    state = {
        visibleMenu: false,
        currentMedia: '',
        leaveMenu: false,
        menu: [
            { name: 'Shop',
              subMenu: [
                  'Coats & Jackets',
                  'Trousers',
                  'Dresses',
                  'Skirts',
                  'Tops & T-Shirts',
                  'Knitwear',
                  'Shirts & Blouses'
              ],
              subMenuShow: false
            },
            { name: 'New Arrivals',
              link: '#'
            },
            { name: 'Collections',
              link: '#'
            },
            { name: 'Notes',
              link: '#'
            },
            { name: 'Story',
              link: '#'
            }
        ]
    };

    handelClick = () => {
        this.setState({
            visibleMenu: !this.state.visibleMenu
        });
    };

    onMouseLeave = () => {
        this.setState({
            leaveMenu: true
        });

        setTimeout(() => {
            if(this.state.leaveMenu) {
                this.setState({
                    visibleMenu: false
                });
            }
        }, 3000)
    };

    onMouseEnter = () => {
        this.setState({
            leaveMenu: false
        });
    };

    render() {
        const state = this.state;

        return (
            <div className="nav-menu" onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
                <div className="nav-menu__wrapper">
                    <div onClick={this.handelClick}>
                        <Burger visibleMenu={state.visibleMenu} />
                    </div>
                </div>
                <ReactCSSTransitionGroup
                    transitionName="menu"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {state.visibleMenu && (
                        <nav className="nav">
                            {state.menu.map(menuItem =>
                                <MenuItem menuItem={menuItem} key={menuItem.name} />
                            )}
                        </nav>
                    )}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Menu;
