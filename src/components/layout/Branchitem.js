import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Branchitem extends Component {
    render() {
       
        return (
            <div style={branchHolderStyle}>
                <p style={branchItemStyle}>{this.props.branch.branch}</p>
            </div>
        )
    }
}
// Proptypes
Branchitem.propTypes = {
    Branchitem: PropTypes.array
}

//style
const branchHolderStyle= {
    backgroundColor : "#f4f4f4",
    padding: '4px',
    borderBottom: '1px solid #555555'
}
const branchItemStyle = {
    padding: '0',
    margin: '0'
}

export default Branchitem
