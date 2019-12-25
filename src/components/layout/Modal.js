import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Modal extends Component {
    itemGetStyle = () => {
        // if(this.props.branch.deleted){
        //     return {
        //         textDecoration : 'line-through'
        //     }
        // }else {
        //     return{
        //         textDecoration: 'none'
        //     }
        // }
        return {
            backgroundColor : "#f4f4f4",
            padding: '4px',
            borderBottom: '1px solid #555555',
            textDecoration: this.props.branch.deleted ? 'line-through' : 'none'
        }
    }
    
   
    render() {
       const {id , branch} = this.props.branch
        return (
            <div style={this.itemGetStyle()}>
                <p style={branchItemStyle}>
                    <input type="checkbox" onChange={this.props.markDeleted.bind(this, id)}/>{' '}
                    {branch}
                    <button onClick={this.props.delBranch.bind(this, id)}style={delBtnStyle}>
                        Delete
                    </button>
                    <button style={editBtnStyle}>Edit</button>
                </p>
            </div>
        )
    }
}
// Edit button style
const editBtnStyle = {
    backgroundColor : '#ff8700',
    color: 'white',
    fontSize:'10px',
    borderRadius: '50%',
    border: 'none',
    padding: '3px 2px',
    cursor: 'pointer',
    float: 'right',
    marginRight: '10px'
}
// Delete Button Style
const delBtnStyle = {
    backgroundColor : '#d70000',
    color: 'white',
    fontSize:'10px',
    borderRadius: '50%',
    border: 'none',
    padding: '3px 2px',
    cursor: 'pointer',
    float: 'right',
}

// Proptypes
Modal.propTypes = {
    Modal: PropTypes.array
}

//style
// const branchHolderStyle= {
//     backgroundColor : "#f4f4f4",
//     padding: '4px',
//     borderBottom: '1px solid #555555'
// }
const branchItemStyle = {
    padding: '0',
    margin: '0'
}

export default Modal;
