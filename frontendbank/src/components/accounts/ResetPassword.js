import React, { Component } from 'react'
import { Link , Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { resetPassword } from '../action/auth'

export class ResetPassword extends Component {

  state = {
    username: '',
    password:'',
    justReset: false
  };
  
  // static PropTypes = {
  //   resetPassword: PropTypes.func.isRequired,
  //   isAuthenticated: PropTypes.bool
  // }

  componentDidMount(){
    this.setState({justReset:false})
  }

  // on submit target the property of old and new password
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.password,this.state.username)
    this.props.resetPassword(this.state.username, this.state.password)
    this.setState({ justReset: true })
  }

  // Saving the value of inserted input
  onChange = e => this.setState({[e.target.name] : e.target.value})

  render() {
    if(this.props.isAuthenticated){
      return <Redirect to="/branches"/>
    }
    if(this.state.justReset){
      return <Redirect to="/login"/>
    }
    const {username, password} = this.state
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Reset Password</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="username"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, {resetPassword})(ResetPassword);
