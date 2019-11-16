import React from 'react';
import './mainContent.css';
import {connect} from "react-redux";
import {changeUserSession, logout} from "../actions";
import {Link} from "react-router-dom";

class MainContent extends React.Component {
    constructor(props) {
        super(props);
    };

    doLogout = (event) => {
        event.preventDefault();
        this.props.logout();
        // console.log(this.props)
    };

    doShowModule = (event, module) => {
        event.preventDefault();
        switch (module) {
            case 'category':
                this.props.history.push({
                    pathname: '/protected/main/masterCategory'
                });
                break;
            case 'product':
                this.props.history.push({
                    pathname: '/protected/main/masterProduct'
                });
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand mx-auto" href="#">My Awesome Project</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse w-100" id="navbarNavAltMarkup">
                        <div className="navbar-nav mr-auto">
                            <a className="nav-item nav-link" onClick={(event) => {
                                this.doShowModule(event, 'category')
                            }}>Category</a>
                            <a className="nav-item nav-link" onClick={(event) => {
                                this.doShowModule(event, 'product')
                            }}>Product</a>
                        </div>
                    </div>
                    <div className="navbar-collapse collapse w-100">
                        <div className="navbar-nav ml-auto">
                            <label
                                className="nav-item nav-link">{'Welcome ' + this.props.userActive.namaLengkap}</label>
                            <a className="nav-item nav-link" onClick={this.doLogout}>Logout</a>
                        </div>
                    </div>

                </nav>
                <div className='container mt-3'>
                    {this.props.children}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {userActive: state.userActive};
};

const mapDispatchToProps = {
    logout: logout
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);