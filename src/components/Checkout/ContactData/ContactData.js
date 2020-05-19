import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from '../../../axios-orders'

import classes from './ContactData.module.css'
import Button from '../../UI/Button/Button'
import FormInput from '../../UI/FormInput/FormInput'
import Spinner from '../../UI/Spinner/Spinner'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index'



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
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    name: 'email',
                    id: 'email',
                    placeholder: 'Your email...'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'street',
                    id: 'street',
                    placeholder: 'Street...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'zipCode',
                    id: 'zipCode',
                    placeholder: 'Zip Code...'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 5,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'country',
                    id: 'country',
                    placeholder: 'Your country...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true
            }
        },
        formIsValid: false
    }

    checkValidity = (value, rules) => {
        let isValid = true;
   
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid; 
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for(let formElementIndentifier in this.state.orderForm) {
            formData[formElementIndentifier] = this.state.orderForm[formElementIndentifier].value
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }

        this.props.onPurchaseBurger(order, this.props.token);
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const copiedOrderForm = {
            ...this.state.orderForm
        };
        const copiedFromElements = {...copiedOrderForm[inputIdentifier]};
        copiedFromElements.value = event.target.value;
        copiedFromElements.touched = true;
        copiedFromElements.valid = this.checkValidity(copiedFromElements.value, copiedFromElements.validation)
        copiedOrderForm[inputIdentifier] = copiedFromElements;
        
        let formIsValid = true;
        for(let inputIdentifier in copiedOrderForm) {
            formIsValid = copiedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: copiedOrderForm, formIsValid: formIsValid});
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
                        invalid={!inputElement.config.valid}
                        touched={inputElement.config.touched}
                        validationIsRequired={inputElement.config.validation}
                        value= {inputElement.config.value}  /> )
        })

        let form = (
            <form onSubmit={this.orderHandler}>
                {listOfInputFields}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        )

        if(this.props.loading) {
            form = <Spinner />;
        }
        
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.orders.loading,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPurchaseBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios))