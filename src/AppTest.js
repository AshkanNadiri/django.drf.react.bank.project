import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Modal from "./components/Modal";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        location: "",
        location_name: ""
      },
      branches: []
    };
  }
  componentDidMount() {
    axios
          .get("https://bank-backend-korey.herokuapp.com/branch/")
          .then(res => this.setState({branches: res.data.results }))
          .catch(err => console.log(err));
  }

  handleSubmit(item) {
    axios
          .post("https://bank-backend-korey.herokuapp.com/branch/", item)
          .then(res => this.componentDidMount())
  }

  handleDelete(item) {
    axios
          .delete(`https://bank-backend-korey.herokuapp.com/branch/${item.id}`)
          .then(res => this.componentDidMount())
  }

  renderBranches() {
    let newItems = []
    newItems = this.state.branches
    return newItems.map(item => (
      <div>
        <li key={item.id}>
          {item.location_name}
        </li>
        <button
                onClick={() => this.editItem(item)}
                className="btn btn-secondary mr-2"
              >
                {" "}
                Edit{" "}
              </button>
        <button
        onClick={() => this.handleDelete(item)}
        className="btn btn-danger"
      >
        Delete{" "}
      </button>
    </div>
    ))
  }

  
  onSave(item) {
    axios
          .post("https://bank-backend-korey.herokuapp.com/branch/", item)
          .then(res => this.componentDidMount())
  }

  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
        value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value};
    this.setState({ activeItem });
  };

  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = item => {
    this.toggle();
        if (item.id) {
          axios
            .put(`https://bank-backend-korey.herokuapp.com/branch/${item.id}/`, item)
            .then(res => this.componentDidMount());
          return;
        }
        axios
          .post("https://bank-backend-korey.herokuapp.com/branch/", item)
          .then(res => this.componentDidMount());
      };
  

  render() {
    return (
      <div>
        <ul>{this.renderBranches()}</ul>
        <button onClick={this.createItem} className="btn btn-primary">Add task</button>
        {this.state.modal ? (
              <Modal
                activeItem={this.state.activeItem}
                toggle={this.toggle}
                onSave={this.handleSubmit}
              />
            ) : null}
      </div>
    )
  }
}
export default App;