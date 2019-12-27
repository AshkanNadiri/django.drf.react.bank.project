import React, { Component } from 'react'

export class AddItem extends Component {
    state = {
        branch : ''
    }
    // This will target the value of the input bar / As long as name target is the same with input name value
    onChange = (e) => this.setState({ [e.target.name] : e.target.value });

    // Submit function for adding the branch in to the list
    onSubmit = (e) => {
        // const submit_branch = document.getElementById('branch_submit').value
        e.preventDefault();
        this.props.addItem(this.state.branch);
        this.setState({ branch: ''})
        document.getElementById('branch_submit').value = null
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}style= {{display:'flex'}}>
                <input 
                    type="submit" 
                    value= "Submit" 
                    style= {{
                        flex: '1',
                        padding: '3px',
                        backgroundColor: '#666666',
                        color: '#fff',
                        height: '30px',
                        border:'none'
                    }}

                />
                <input 
                    id = "branch_submit"
                    type = "text" 
                    name = "branch"
                    placeholder={this.props.placeholder}
                    value = {this.state.title}
                    onChange = {this.onChange}
                    style = {{ 
                        flex : '10', 
                        padding: '3px',
                        backgroundColor: '#cccccc',
                        height: '30px',
                        boder: 'none',
                    }}
                />
                
            </form>
        )
    }
}

export default AddItem
