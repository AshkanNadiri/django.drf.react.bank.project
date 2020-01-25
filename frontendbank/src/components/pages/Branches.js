import React, { Component } from 'react'
import Modal from '../layout/Modal';
import AddItem from '../layout/AddItem'
import axios from 'axios';
import {connect} from 'react-redux'
// import PropTypes from 'prop-types'



class Branches extends Component {

    state = {
        branches: [],
        showChase: false
        
    }
    // static propTypes = {
    //     auth: PropTypes.object.isRequired,
    // }

    componentDidMount() {
        this.refreshBranches();
    }

    //refresh branch list
    refreshBranches= (branch) => {
        const {user} = this.props.auth
        console.log(user.username)
        axios.get('http://127.0.0.1:8000/branches/')
            .then(res => {
                 this.setState({branches: res.data.results})
                //  console.log(res.data.results.users)
                
            })
            
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
 

    // Toggle delete
    markDeleted = (id)=>{
        this.setState({ branches: this.state.branches.map(branch => {
           if(branch.id === id ){
               branch.deleted = !branch.deleted
           } 
           return branch

        }) });
    }


    //Edit Branch
    editBranch = (id, branch)=> {
        let body = {
            branch,
            address: "default address"
        }
        axios.put(`http://127.0.0.1:8000/branches/${id}/`,body)
            .then((res) => { console.log(res)}) 
            .catch(err => console.log(err))
    }
     
    renderBranch = () =>  {
        console.log(this.state.branches)
        return this.state.branches.map((branch) => (

           <div key={branch.id}>
                <Modal 
                    branch={branch} 
                    markDeleted={this.markDeleted} 
                    delBranch={this.delBranch}
                    editItem = {this.editBranch}
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

const mapToStateProps = state => ({
    auth: state.auth
})

export default connect(mapToStateProps)(Branches);
