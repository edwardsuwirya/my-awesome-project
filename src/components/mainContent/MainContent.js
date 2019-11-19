import React from 'react';
import './mainContent.css';
import {connect} from "react-redux";
import {logout} from "../../actions/user/index";

class MainContent extends React.Component {
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
            case 'upload':
                this.props.history.push({
                    pathname: '/protected/main/upload'
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
                    <div className="navbar-brand mx-auto"><i className="fas fa-child"></i> My Awesome Project</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse w-100" id="navbarNavAltMarkup">
                        <div className="navbar-nav mr-auto">
                            <div className="nav-item nav-link" onClick={(event) => {
                                this.doShowModule(event, 'category')
                            }}><i className="fas fa-clipboard-list"></i> Category</div>
                            <div className="nav-item nav-link" onClick={(event) => {
                                this.doShowModule(event, 'product')
                            }}><i className="fas fa-dolly-flatbed"></i> Product</div>
                            <div className="nav-item nav-link" onClick={(event) => {
                                this.doShowModule(event, 'upload')
                            }}><i className="fas fa-cloud-upload-alt"></i> Upload</div>
                        </div>
                    </div>
                    <div className="navbar-collapse collapse w-100">
                        <div className="navbar-nav ml-auto">
                            <label
                                className="nav-item nav-link">{'Welcome ' + this.props.userActive.namaLengkap}</label>
                            <div className="nav-item nav-link" onClick={this.doLogout}><i className="fas fa-sign-out-alt"></i> Logout</div>
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
    return {userActive: state.userActive};
};

const mapDispatchToProps = {
    logout: logout
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);