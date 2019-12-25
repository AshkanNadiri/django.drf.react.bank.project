import React, { Component } from 'react'
import Modal from '../layout/Modal';
import AddItem from '../layout/AddItem'
import uuid from 'uuid'
import axios from 'axios';

class Branch extends Component {
    state = {
        branches: []
    }
   
    componentDidMount() {
        this.refreshBranches();
    }
    //refresh branch list
    refreshBranches= () => {
    axios.get('https://bank-django-drf-local.herokuapp.com/branch/')
        .then(res => this.setState({branches: res.data.results}))
        .catch(err=> console.log(err))
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
    //Delete branch
    delBranch = (id) => {
        this.setState({ branches: [...this.state.branches.filter(branch => branch.id !== id)]});
    }
 
    renderBranch = () => {
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

        //Add item
        addItem = (branch) => {
            const newBranch = {
                id: uuid.v4(),
                branch,
                deleted: false
            }
            this.setState({ branches: [...this.state.branches, newBranch] })
        }
    render () {
       return (

           <div>
               
               <AddItem placeholder={'Branch Name'} addItem={this.addItem}/> {
                   this.renderBranch()
               }
               
           </div>
       )
   }
}



export default Branch
