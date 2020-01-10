// import React from 'react'

// export default function Customers() {
//     return (
//         <product>
//             <h1>Customers</h1>
//         </product>
//     )
// }
import React, { Component } from 'react'
import AddItem from '../layout/AddItem'

class Customers extends Component {

    state = {
        customers : []
    }



    render() {
        return (
            <div>
                <AddItem
            </div>
        )
    }
}

export default Customers
