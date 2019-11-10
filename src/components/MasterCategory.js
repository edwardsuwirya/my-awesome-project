import React from 'react';

class MasterCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    doTutup = (e) => {
        e.preventDefault();
        this.props.eventTutup();
    };

    render() {
        return (
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Master Category</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the
                        card's content.</p>
                    <a href="#" className="card-link" onClick={this.doTutup}>Close</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        )
    }
}

export default MasterCategory;