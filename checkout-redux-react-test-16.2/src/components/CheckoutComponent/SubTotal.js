
import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../shared/Tooltip'
const SubTotal = (props) => (
    <div className="row">
        <div className="col-6">
            Subtotal :
            </div>
        <div> $101       </div>
        <Tooltip
            message={'Pick up your orders in the store helps cut costs and we pass the savings on you'}
        >Pick Up savings</Tooltip>
        <div className="col-6 h5">
            Est. taxes & fees
            (Based on 94085)
        <div> $8.92       </div>
        </div>
    </div>
);

SubTotal.propTypes = {
};

export { SubTotal };