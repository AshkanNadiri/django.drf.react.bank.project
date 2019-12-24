import React, { Component } from 'react'
import Branchitem from '../layout/Branchitem';



class Branch extends Component {
    state = {
        branches: [
            {
                id: 1,
                branch: 'Chase',
                deleted: false 
            },
            {
                id: 2,
                branch: 'Bank of America',
                deleted: false 
            },
            {
                id: 3,
                branch: 'Wells fargo',
                deleted: false 
            }
        ]
    }
   
    // Toggle delete
    markDeleted = (id)=>{
        this.setState({ branches: this.state.branches.map(branch => {
           if(branch.id === id){
               branch.deleted = !branch.deleted
           } 
           return branch
           
        }) });
    }
    //Delete branch
    delBranch = (id) => {
        this.setState({ branches: [...this.state.branches.filter(branch => branch.id !== id)]});
    }
    

    render() {

        return this.state.branches.map((branch) => (

           
            <Branchitem key={branch.id}branch={branch} markDeleted={this.markDeleted} delBranch={this.delBranch}/>
        ))
    }
}



export default Branch
