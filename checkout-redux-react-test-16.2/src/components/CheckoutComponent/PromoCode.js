// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SeeItemDetails } from './SeeItemDetails'

class PromoCode extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            open: false
        };
    }
    onClick = () => {
        this.setState(state => ({ open: !state.open }));

    }
    handleSubmit(event) {
        this.props.discountAppliedHere();
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <div onClick={this.onClick} >Apply Promo Code +</div>
                {this.state.open
                    ? <div>
                        <input type="text" ref={this.input} />
                        <button onClick={this.handleSubmit}  >
                            Apply </button>
                    </div>
                    : ''}
            </div>
        );
    }
};
PromoCode.propTypes = {
    discountAppliedHere: PropTypes.func

};
export { PromoCode }
