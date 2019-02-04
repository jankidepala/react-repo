// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchZipCodes } from '../state/actions/ZipCodeActions';
import { SubTotal } from './SubTotal';
import { ItemDetails } from './ItemDetails'
import { PromoCode } from './PromoCode';
import { applyDiscountAction } from '../state/actions/CheckoutAction';
import chairsm from '../../images/walmart-small.png';


class CheckoutContainer extends Component {
    constructor(props) {
        super(props);
        this.discountAppliedHere = this.discountAppliedHere.bind(this)
    }
    componentWillMount() {
        this.props.applyDiscountAction(100, false)
    }
    discountAppliedHere() {
        this.props.applyDiscountAction(100, true)
    }
    render() {
        let p = 'ss'; //this.props.applyDiscount(100).payload
        console.log("container>>>", this.props.totalAmount)
        return (
            <div className="container">
                <SubTotal />
                <hr className="my-4" />
                <div className="row">
                    <div className="col-6">Estimated Total:</div>
                    {this.props.totalAmount}
                    </div>
                    <ItemDetails
                    />
                    <hr className="my-4" />
                    <PromoCode
                        discountAppliedHere={this.discountAppliedHere} />
            </div>
        );
    }
}

CheckoutContainer.propTypes = {
    // applyDiscount: PropTypes.func.isRequired,

};

const mapStateToProps = state => {
    const { totalAmount } = state.checkOutReduce;
    return { totalAmount };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ applyDiscountAction }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
export { hoc as CheckoutContainer };