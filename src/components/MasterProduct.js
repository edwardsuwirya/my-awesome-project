import React from 'react';
import MainContent from "./MainContent";
import {connect} from "react-redux";
import {getListProductAction, listProduct, setListProduct, setListProductAction, updateProductAction} from "../actions";
import {getListProduct, getListProductService} from "../api/product";

class MasterProduct extends React.Component {
    constructor(props) {
        super(props);
    }


    doGetListProduct = async () => {
        const response = await getListProductService();
        const data = await response.json();
        this.props.setListProductAction(data);
    };

    componentDidMount() {
        this.doGetListProduct();
    }

    doRenderListProduct = () => {
        if (this.props.listProduct) {
            return this.props.listProduct.map((product) => {
                return (
                    <tr key={product.productId}>
                        <td>{product.productId}</td>
                        <td>{product.productName}</td>
                        <td>
                            <button type="button" className='btn btn-primary' onClick={() => {
                                this.doUpdateProduct(product)
                            }}>Update
                            </button>
                        </td>
                    </tr>
                )
            })
        } else {
            return (
                <tr>
                    <td colSpan='2'>No Found</td>
                </tr>
            )
        }
    };

    doUpdateProduct = (product) => {
        this.props.updateProductAction(product);
        this.props.history.push({pathname: '/protected/main/masterProductUpdate'})
    };

    render() {
        return (
            <MainContent {...this.props}>
                <div className="card" style={{width: '50rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Master Product</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <div className="card-text">
                            <table style={{width: '100%'}}>
                                <thead>
                                <tr>
                                    <td>Product ID</td>
                                    <td>Product Name</td>
                                    <td></td>
                                </tr>
                                </thead>
                                <tbody>
                                {this.doRenderListProduct()}
                                </tbody>
                            </table>
                        </div>
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

const mapDispatchToProps = {
    setListProductAction: setListProductAction,
    getListProductAction: getListProductAction,
    updateProductAction: updateProductAction
};
export default connect(mapStateToProps, mapDispatchToProps)(MasterProduct);