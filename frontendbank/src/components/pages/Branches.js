import React, { Component } from 'react'
import Modal from '../layout/Modal';
import AddItem from '../layout/AddItem'
import axios from 'axios';


const custom_options = {
    headers: {
        'Origin' : 'http://127.0.0.1:8000/',
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
        axios.get('http://127.0.0.1:8000/branches/')
            .then(res => this.setState({branches: res.data.results}))
            .catch(err=> console.log(err))
    }
    //Add item
    addItem = (branch, id) => {
        let body = {"branch": branch , "address" :  "default address"}
        axios
            .post('http://127.0.0.1:8000/branches/',body)
            .then(res => this.setState({ branches: [...this.state.branches, res.data]}))
            .catch(err => console.log(err))
    }
     //Delete branch
    delBranch = (id) => {
        axios.delete(`http://127.0.0.1:8000/branches/${id}/`)
            .then(res => this.refreshBranches())
            //.setState({ branches: [...this.state.branches.filter(branch => branch.id !== id)]})
    }
    //Edit branch
    editBranch = (id) => {
        console.log(id)
        if(th
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
        console.log(this.state.branches)
        return this.state.branches.map((branch) => (
            
           <div>
                <Modal 
                    key={branch.id}
                    branch={branch} 
                    markDeleted={this.markDeleted} 
                    delBranch={this.delBranch}
                    editBranch={this.editBranch}
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