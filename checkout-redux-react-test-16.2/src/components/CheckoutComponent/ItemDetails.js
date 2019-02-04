// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SeeItemDetails } from './SeeItemDetails'

class ItemDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        };
    }
    onClick = () => {
        this.setState(state => ({ open: !state.open }));

    }
    render() {
        return (
            <div>
                <div onClick={this.onClick} >See Item Details +</div>
                {this.state.open ? <SeeItemDetails/> : ''}
            </div>
        );
    }
};

export { ItemDetails }
