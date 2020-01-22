import React, { Component } from 'react'
import { Link , Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {resetPassword} from '../action/auth'

export class ResetPassword extends Component {

  state = {
    username: '',
    password:''
  }
  // on submit target the property of old and new password
  onSubmit = e => {
    e.preventDefault();
    console.log('submit')
    this.props.resetPassword(this.state.username,this.state.password)
  }
  // Saving the value of inserted input
  onChange = e => this.setState({[e.taget.name] : e.target.value})

  render() {
    const {username, password} = this.state
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Reset Password</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Old Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={oldPassword}
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={newPassword}
              />
            </div>
            
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Confirm
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

export default connect (mapStateToProps, {resetPassword})(ResetPassword)
