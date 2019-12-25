import React from 'react';

export class Model extends Component {
    render() {
        const {id} = this.props.item;
        return (
            <li>
                <div>
                    {this.props.item}
                </div>
                <button>
                    
                </button>
            </li>
        )
    }
}