import React from 'react';
import MainContent from "./MainContent";
import {connect} from "react-redux";

class MasterCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    doTutup = (e) => {
        e.preventDefault();
        this.props.history.push({
            pathname: '/protected/main'
        })
    };

    render() {
        return (
            <MainContent {...this.props}>
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Master Category</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of
                            the
                            card's content.</p>
                        <a href="#" className="card-link" onClick={this.doTutup}>Close</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </MainContent>
        )
    }
}

const mapStateToProps = (state) => {
    return {listProduct: state.listProduct};
};
export default connect(mapStateToProps)(MasterCategory);