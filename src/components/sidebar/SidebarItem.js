import React from 'react';
import './sidebaritem.css';
import {withRouter} from "react-router-dom";

class SidebarItem extends React.Component {
    state = {childrenVisible: false};
    doShowModule = (event, path) => {
        event.preventDefault();
        this.props.history.push({
            pathname: path
        });
    };

    doSetVisibilty = () => {
        this.setState({childrenVisible: !this.state.childrenVisible})
    };

    doRenderChildren = () => {
        return this.props.children.map((menu) => {
            return (
                <li className="nav-item">
                    <a className='nav-link' href='#' onClick={(event) => {
                        this.doShowModule(event, menu.path)
                    }}> <i className={`fas ${menu.icon}`}></i> {menu.name}</a>
                </li>
            )
        })
    };

    render() {
        return (
            <div>
                <div className='bg-secondary pl-2 text-white' onClick={this.doSetVisibilty}> {this.props.header}</div>
                <ul className={`nav d-flex flex-column ${this.state.childrenVisible ? '' : 'show-children'}`}>
                    {this.doRenderChildren()}
                </ul>
            </div>
        )
    }
}

export default withRouter(SidebarItem);