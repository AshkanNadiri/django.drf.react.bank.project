import React from 'react';
import { Link } from 'react-router-dom';
import { relative } from 'path';



function Header() {
    return (
    //     <nav className="navbar navbar-expand-sm navbar-light bg-light">
    //     <div className="container">
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarTogglerDemo01"
    //         aria-controls="navbarTogglerDemo01"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon" />
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    //         <a className="navbar-brand" href="#">
    //           Lead Manager
    //         </a>
    //       </div>
    //     </div>
    //   </nav>


        
      <div style={headerStyle}>
          <div>
            <h1 style= {{color: '#fff',textAlign:'center'}}> MRM BANK</h1>
            <Link style={linkStyle} to="/">Home</Link> {' '}
            <Link style={linkStyle} to="/branches">Branches</Link> {' '}
            <Link style={linkStyle} to="/accounts">Accounts</Link> {' '}
            <Link style={linkStyle} to="/customers">Customers</Link> {' '}
            <Link style={linkStyle} to="/products"> Products</Link> 
            <div style={{float:'right'}}>
                <Link className="nax-link" to="/register"> Register</Link> 
                <Link style={linkStyle} to="/login"> Login</Link> 
            </div>
          </div>       
      </div>
    )
   
}
const linkStyle = {
    color: '#fff',
    padding: '10px',
    fontSize: '15px',

    
}
const headerStyle = {

    padding: '10',
    background: '#333333',
    borderBottom: '1px solid #555555'

}

export default Header;
