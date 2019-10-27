import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component{

    render(){
        return (
            <div className="ui secondary button">  
                <StripeCheckout 
                amount={10000}
                currency="MAD"
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}>Add Credits</StripeCheckout>
            </div>
        )
    }
}
// const mapStateToProps = ({ auth }) => {
//     return { user: auth.current_user }
// }
export default connect(null, actions)(Payments);
