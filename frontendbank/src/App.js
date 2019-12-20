import React, { Component } from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Branch from './components/pages/Branch';
import Account from './components/pages/Account';
import Customer from './components/pages/Customer';
import Product from './components/pages/Product';



class App extends Component {
  render() {
    return (
      <Router>
            <Header/>
            <Route exact path="/" component={Home} />
            <Route path="/branch" component={Branch}/>
            <Route path ="/account" component={Account}/>
            <Route path ="/customer" component={Customer}/>
            <Route path = "/product" component={Product}/>

      </Router>
    );
  }
}
export default App;












// componentDidMount() {
//   this.refreshList();
// }

// refreshList = () => {
//   axios 
//     .get("https://bank-django-drf-local.herokuapp.com/account/")
// }
// }


// class App extends Component {


// refreshList = () => {
//   axios
//     .get("https://bank-django-drf-local.herokuapp.com/account/")
//     .then(res => this.setState({ todoList: res.data.results }))
//     .catch(err => console.log(err));
// };

// renderItems = () => {
//   const { viewCompleted } = this.state;
//   const newItems = this.state.todoList.filter(
//     item => item.completed === viewCompleted
//   );
//   return newItems.map(item => (
//     <li
//       key={item.id}
//       className="list-group-item d-flex justify-content-between align-items-center"
//     >
//       <span
//         className={`todo-title mr-2 ${
//           this.state.viewCompleted ? "completed-todo" : ""
//         }`}
//         title={item.description}
//       >
//         {item.title}
//       </span>
//       <span>
//         <button
//           onClick={() => this.editItem(item)}
//           className="btn btn-secondary mr-2"
//         >
//           {" "}
//           Edit{" "}
//         </button>
//         <button
//           onClick={() => this.handleDelete(item)}
//           className="btn btn-danger"
//         >
//           Delete{" "}
//         </button>
//       </span>
//     </li>
//   ));
// };
