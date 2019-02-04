// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../shared/Tooltip'

const SeeItemDetails = (props) => (
    <div>
        <div className="row">
            <div className="col-md-4"> 
                Essential by OFM ESS 3085 Racing Style Leather Gaming Chair, Red
                <div>
                    <span className="font-weight-bold">$99</span> 
                    <span className="font-weight-bold float-right"> Qty: 1</span>
                </div>
                <div className="line-through">102.96</div>
            </div>
        </div>
    </div>
);

SeeItemDetails.propTypes = {
};

export { SeeItemDetails };