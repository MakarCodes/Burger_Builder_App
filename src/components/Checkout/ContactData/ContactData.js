import React, { Component } from 'react'
import Button from '../../UI/Button/Button'
import classes from './ContactData.module.css'
import { connect } from 'react-redux'
import axios from 'axios'

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        adress: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)
        // create order object and send it to the server
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
        }

        axios.post('https://burger-app-ce2e9.firebaseio.com/orders.json', order)
            .then(response => {
                // chnage loading status to false
                this.props.history.push('/');
            })
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your name..."/>
                    <input type="email" name="email" placeholder="Your email..."/>
                    <input type="text" name="street" placeholder="Street..."/>
                    <input type="text" name="postal" placeholder="Postal..."/>
                    <Button 
                        clicked={this.orderHandler}
                        btnType="Success">ORDER</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPirce
    }
}

export default connect(mapStateToProps)(ContactData)