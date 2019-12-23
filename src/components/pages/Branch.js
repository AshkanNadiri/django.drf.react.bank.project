import React, { Component } from 'react'
import Branchitem from '../layout/Branchitem'

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

    render() {

        return this.state.branches.map((branch) => (
            <Branchitem/>
        ))
    }
}

export default Branch
