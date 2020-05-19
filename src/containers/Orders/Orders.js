import React, { Component } from 'react'
import { connect } from 'react-redux'
import Order from '../../components/Order/Order/Order'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render() {
        let orders = <Spinner />;
        if(!this.props.loading) {
            orders = (
                <div>
                    {this.props.orders.map(order => (
                         <Order 
                            ingredients={order.ingredients} 
                            price={order.price} 
                            key={order.id}
                            personName={order.orderData.name}
                            />
                        
                    ))}
                </div>
            )
        }
        return orders;
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        loading: state.orders.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapToDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps,mapToDispatchToProps)(withErrorHandler(Orders, axios))


