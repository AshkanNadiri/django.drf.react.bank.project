import React, { Component } from 'react'
import Modal from '../layout/Modal';
import AddItem from '../layout/AddItem'




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
                id: 4,
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
