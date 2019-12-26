import React, { Component } from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Branches from './components/pages/Branches';
import Accounts from './components/pages/Accounts';
import Customers from './components/pages/Customers';
import Products from './components/pages/Products';


import './App.css' 




class App extends Component {
  
  render() {
    return (
      <Router>
        <div >
            <Header/>
            <Route exact path="/" component={Home} />
            <Route path="/branches" component={Branches}/>
            <Route path ="/accounts" component={Accounts}/>
            <Route path ="/customers" component={Customers}/>
            <Route path = "/products" component={Products}/>
        </div>    
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
