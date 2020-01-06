import React, { Component } from 'react'
import AddItem from '../layout/AddItem'
import Axios from 'axios';

export class Customers extends Component {
    state = {
        customers: []
    }

    componentDidMount() {
        this.refreshCustomers();
    }

    refreshCustomers = (customer) => {
        Axios.get('https://bank-django-drf-local.herokuapp.com/customers/')
            .then(res => this.setState({customers: res.data.results}))
    }




    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Customers
