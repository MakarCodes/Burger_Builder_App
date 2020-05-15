import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Order from '../../components/Order/Order/Order'

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('https://burger-app-ce2e9.firebaseio.com/orders.json')
            .then(response => {
                console.log(response.data)
                const fetchedOrder = [];
                for(let key in response.data) {
                    fetchedOrder.push({
                        ...response.data[key],
                        id: key
                    })
                }
                console.log(fetchedOrder)
                this.setState({orders: fetchedOrder, loading: false});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }


    render() {
        const orderList = this.state.orders.map(order => {
             return <Order ingredients={order.ingredients} price={order.price} key={order.id}/>
        })
        return (
            <div>
                {orderList}
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


