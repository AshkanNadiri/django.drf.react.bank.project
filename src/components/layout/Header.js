import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { relative } from 'path';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout } from '../action/auth'

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }
    render () {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <div style={{float:'right',paddingRight:'10px'}}>
                <span style={{color:'white'}}className= "navbar-text mr-3">
                    <strong>
                        {user ? `Welcome ${user.username}` : ''}
                    </strong>
                    
                </span>
                <button onClick={this.props.logout}> Logout</button>
            </div>
        )

        const guestLinks = (
            <div style={{float:'right'}}>
                <Link className="nax-link" to="/register"> Register</Link> 
                <Link style={linkStyle} to="/login"> Login</Link> 
             </div>
        )
        return (  
            <div style={headerStyle}>
                <div>
                  <h1 style= {{color: '#fff',textAlign:'center'}}> MRM BANK</h1>
                  {/* <Link style={linkStyle} to="/">Home</Link> {' '} */}
                  <Link style={linkStyle} to="/branches">Branches</Link> {' '}
                  <Link style={linkStyle} to="/accounts">Accounts</Link> {' '}
                  <Link style={linkStyle} to="/customers">Customers</Link> {' '}
                  <Link style={linkStyle} to="/products"> Products</Link> 
                  {isAuthenticated ? authLinks : guestLinks} 
                </div> 
                     
            </div>
          )
    }
}



const linkStyle = {
    color: '#fff',
    padding: '10px',
    fontSize: '15px',

    
}
const headerStyle = {

    padding: '10',
    background: '#333333',
    borderBottom: '1px solid #555555',
    height: '100px'

}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, {logout})(Header);
