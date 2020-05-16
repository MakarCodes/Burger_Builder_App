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
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest'
            }
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)
        const formData = {};
        for(let formElementIndentifier in this.state.orderForm) {
            formData[formElementIndentifier] = this.state.orderForm[formElementIndentifier].value
        }
        // create order object and send it to the server
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }

        axios.post('https://burger-app-ce2e9.firebaseio.com/orders.json', order)
            .then(response => {
                // chnage loading status to false
                this.props.history.push('/');
            })
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const copiedOrderForm = {
            ...this.state.orderForm
        };
        const copiedFromElements = {...copiedOrderForm[inputIdentifier]};
        copiedFromElements.value = event.target.value;
        copiedOrderForm[inputIdentifier] = copiedFromElements;
        this.setState({orderForm: copiedOrderForm});
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
                        change={(event) => {this.inputChangeHandler(event, inputElement.id)}}
                        key={inputElement.id} 
                        elementType={inputElement.config.elementType} 
                        elementConfig= {inputElement.config.elementConfig} 
                        value= {inputElement.config.value}  /> )
        })
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form onSubmit={this.orderHandler}>
                    {listOfInputFields}
                    <Button btnType="Success">ORDER</Button>
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