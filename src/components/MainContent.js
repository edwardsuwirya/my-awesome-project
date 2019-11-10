import React from 'react';
import MasterCategory from "./MasterCategory";
import MasterProduct from "./MasterProduct";
import './mainContent.css';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeComponent: null}
    };

    doLogout = (event) => {
        event.preventDefault();
        this.props.rubahSesiKeluar(false);
    };

    doCloseMe = () => {
        this.setState({activeComponent: null});
    };
    doShowModule = (module) => {
        switch (module) {
            case 'category':
                this.setState({activeComponent: <MasterCategory eventTutup={this.doCloseMe}/>});
                break;
            case 'product':
                this.setState({activeComponent: <MasterProduct eventTutup={this.doCloseMe}/>});
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
                            <a className="nav-item nav-link" onClick={() => {
                                this.doShowModule('category')
                            }}>Category</a>
                            <a className="nav-item nav-link" onClick={() => {
                                this.doShowModule('product')
                            }}>Product</a>

                        </div>
                    </div>
                    <div class="navbar-collapse collapse w-100">
                        <div className="navbar-nav ml-auto">
                            <label className="nav-item nav-link">{'Welcome ' + this.props.userInfo.email}</label>
                            <a className="nav-item nav-link" onClick={this.doLogout}>Logout</a>
                        </div>
                    </div>

                </nav>
                <div className='container mt-3'>
                    {this.state.activeComponent}
                </div>

            </div>
        )
    }
}

export default MainContent;