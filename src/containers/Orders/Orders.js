import React, { Component } from 'react'
import { connect } from 'react-redux'
import Order from '../../components/Order/Order/Order'

class Orders extends Component {

    render() {
        return (
            <div>
                <Order ingredient={this.props.ingredients} price={this.props.price} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(Orders)


