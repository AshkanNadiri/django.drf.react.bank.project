import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Modal extends Component {
    state = {
        choice: 'Edit',
        isEditable: false,
        editedName: this.props.branch.branch
    }
    
    toggleEditble = () => {
        this.setState({ isEditable : !this.state.isEditable})
        if(!this.state.isEditable){
            this.setState({choice: 'confirm Edit'})
        }else {
            this.setState({choice: 'Edit'})
            const {id , branch} = this.props.branch
            this.props.editItem(id, this.state.editedName)
        }

    }
    
    saveBranch = (branch) => {
        this.setState({ editedName: branch.target.innerHTML})
        console.log("branch: " + branch.target.innerHTML)
    }
   
    render() {
       const {id , branch} = this.props.branch
        return (
            <div >
                <div style={itemGetStyle} className="d-flex flex-row">
                    <p 
                    onBlur={this.saveBranch} 
                    contentEditable={this.state.isEditable} 
                    suppressContentEditableWarning={true}>
                        {this.state.editedName}
                    </p>
                    <div>
                        <button 
                        onClick={this.toggleEditble} 
                        type="button" 
                        className="btn btn-outline-info">
                            {this.state.choice}
                        </button>
                        <button 
                        onClick={this.props.delBranch.bind(this, id)} 
                        type="button" 
                        className="btn btn-outline-danger">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

// Proptypes
Modal.propTypes = {
    Modal: PropTypes.array
}
const itemGetStyle = {
    backgroundColor : "#f4f4f4",
    borderBottom: '1px solid #555555',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
}

const btnWrapStyle = {
    // position: 'absolute',
    // right: '40px'
}


export default Modal;