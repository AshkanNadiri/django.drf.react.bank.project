import React, { Component } from 'react'
import { Link , Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { register} from '../action/auth'
import { createMessage }from '../action/messages'
import axios  from 'axios'

export class Register extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
    groups: [1],
    groupList: []
  }

  componentDidMount(){
    this.getGroups()
  }
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool

  }
  getGroups(){
    axios.get('http://127.0.0.1:8000/groups/')
      .then(res => this.setState({groupList: res.data.results}))
      .catch(err => console.log(err))
  }
  onSubmit = e => {
    e.preventDefault();
    const { username, email, password, password2,groups} = this.state;
    if (password !== password2){
      console.log('message does not match')
      this.props.createMessage ({
        passwordNotMatch : 'Password do not match'
      })
    }else {
      const newUser = {
        username,
        password,
        email,
        groups
      }
     
      this.props.register(newUser)
    }
  }


  onChange = e => this.setState({ [e.target.name] : e.target.value})

  onChangeGroup = e => {
    e.preventDefault()
    const { value } = e.target;
    // console.log(typeof(value))
    this.setState({groups: [parseInt(value)]})
  }
  renderGroupOptions(){
    return this.state.groupList.map(groups => (
      <option key={groups.id} value={groups.id}>{groups.name}</option>
    ))
  }


  render() {
    if(this.props.isAuthenticated){
      return <Redirect to='/branches'/>
    }
    const {username, email, password, password2 } = this.state
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </div>
            <div className="form-group">
              <label>Group</label>
              <select
                className="form-control"
                name="groups"
                onChange={this.onChangeGroup}>
                  {this.renderGroupOptions()}
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, {register, createMessage})(Register);
