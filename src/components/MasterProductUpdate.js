import React from 'react';
import MainContent from "./MainContent";
import {getListProductAction, setListProductAction, updateProductAction} from "../actions";
import {connect} from "react-redux";

class MasterProductUpdate extends React.Component {
    state = {productId: '', productName: ''};

    componentDidMount() {
        this.setState({
            productId: this.props.updateProduct.productId,
            productName: this.props.updateProduct.productName
        })
    }

    onInputProductIdChange = () => {

    }
    onInputProductNameChange = () => {

    }

    render() {
        return (
            <div>
                <MainContent {...this.props}>
                    <div className="form-group">
                        <label htmlFor="productId">Product ID</label>
                        <input type="text" value={this.state.productId} className="form-control"
                               id="productId" onChange={this.onInputProductIdChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" value={this.state.productName} className="form-control"
                               id="productName" onChange={this.onInputProductNameChange}/>
                    </div>
                </MainContent>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {updateProduct: state.updateProduct};
};

export default connect(mapStateToProps)(MasterProductUpdate);