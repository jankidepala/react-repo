
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';

import { getTotal } from '../state/reducers/AppReducer'
import { checkout } from '../state/actions/CheckoutAction'

class CheckoutContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchZipCodes();
    }

    render() {
        return (
            <div>sdsdcsc</div>

        );
    }

}

CheckoutContainer.propTypes = {

    //  checkout: PropTypes.func.isRequired
}

//export { CheckoutContainer };
const mapStateToProps = (state) => ({
    // products: getCartProducts(state),
    // total: getTotal(state)
})
const mapDispatchToProps = dispatch => (
    bindActionCreators({ checkout }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutContainer)
