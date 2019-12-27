import React, { Component } from 'react'
import Modal from '../layout/Modal';
import AddItem from '../layout/AddItem'
// import uuid from 'uuid'
import axios from 'axios';



// const api_url = 'https://bank-django-drf-local.herokuapp.com/branch/'
const custom_options = {
    headers: {
        'Origin' : 'https://bank-django-drf-local.herokuapp.com',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Content-Type' : 'application/json',
        'Accept' : 'text/html; q=1.0, */*',
        'X-Requested-With' : 'XMLHttpRequest',
        'Access-Control-Allow-Headers' : 'X-Requested-With,content-type',
        'Access-Control-Allow-Credentials' : true,
    }
};

class Branch extends Component {
    state = {
        branches: []
    }

    componentDidMount() {
        this.refreshBranches();
    }


    //refresh branch list
    refreshBranches= (branch) => {
        console.log(`${branch} @ ${Date.now().toString()}`)
        axios.get('https://bank-django-drf-local.herokuapp.com/branches/')
            .then(res => this.setState({branches: res.data.results}))
            .catch(err=> console.log(err))
    }
    //Add item
    addItem = (branch) => {
        // console.log(`${branch} @ ${Date.now().toString()}`)
        axios
        .post('https://bank-django-drf-local.herokuapp.com/branches/',
        {'branch' : branch, 'address' : 'default address'}
        ,custom_options)
        .then(res => this.setState({ branches: [...this.state.branches, res.data.results]}))
        .catch(err => console.log(err))
    }
     //Delete branch
    delBranch = (id) => {
        axios.delete(`https://bank-django-drf-local.herokuapp.com/branches/${id}/`)
            .then(res => this.refreshBranches())
            //.setState({ branches: [...this.state.branches.filter(branch => branch.id !== id)]})
    }
    // Toggle delete
    markDeleted = (id)=>{
        this.setState({ branches: this.state.branches.map(branch => {
           if(branch.id === id ){
               branch.deleted = !branch.deleted
           } 
           return branch
           
        }) });
    }
   
 
    renderBranch = () =>  {
        return this.state.branches.map((branch) => (
           <div>
                <Modal 
                    key={branch.id}
                    branch={branch} 
                    markDeleted={this.markDeleted} 
                    delBranch={this.delBranch}
                />
            </div>
        )
    )}

        
    render () {
       return (
           <div>
               <AddItem placeholder={'Branch Name'} addItem={this.addItem}/> {
                   this.renderBranch()
               }
           </div>
       )
   }
};



export default Branch