import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import classes from './ContactData.module.css'
import Button from '../../UI/Button/Button'
import FormInput from '../../UI/FormInput/FormInput'


class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'name',
                    id: 'name',
                    placeholder: 'Your name...'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    name: 'email',
                    id: 'email',
                    placeholder: 'Your email...'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'street',
                    id: 'street',
                    placeholder: 'Street...'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'zipCode',
                    id: 'zipCode',
                    placeholder: 'Zip Code...'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'country',
                    id: 'country',
                    placeholder: 'Your country...'
                },
                value: ''
            }
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)
        // create order object and send it to the server
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
        }

        axios.post('https://burger-app-ce2e9.firebaseio.com/orders.json', order)
            .then(response => {
                // chnage loading status to false
                this.props.history.push('/');
            })
    }

    render() {
        //creating array from orderForm object in state
        const ordeFormElementsArray = [];
        for( let key in this.state.orderForm ) {
            ordeFormElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let listOfInputFields = ordeFormElementsArray.map(inputElement => {
            return ( <FormInput
                        key={inputElement.id} 
                        elementType={inputElement.config.elementType} 
                        elementConfig= {inputElement.config.elementConfig} 
                        value= {inputElement.config.value}  /> )
        })
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    {listOfInputFields}
                    <FormInput inputype={'input'} type="text" name="name" placeholder="Your name..."/>
                    <FormInput inputype={'input'} type="email" name="email" placeholder="Your email..."/>
                    <FormInput inputype={'input'} type="text" name="street" placeholder="Street..."/>
                    <FormInput inputype={'input'} type="text" name="postal" placeholder="Postal..."/>
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
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData)