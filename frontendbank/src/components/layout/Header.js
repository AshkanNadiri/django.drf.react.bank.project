import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
    return (
        
      <header style={headerStyle}>
            <h1> MRM BANK</h1>
            <Link style={linkStyle} to="/">home</Link>
            <Link style={linkStyle} to="/branch">branch</Link>
            <Link style={linkStyle} to="/account">account</Link>
            <Link style={linkStyle} to="/customer">customer</Link>   
            <Link style={linkStyle} to="/product"> product</Link> 
      </header>
    )
   
}
const linkStyle = {
    color: '#000',
    padding: '10px',
    fontSize: '15px',

    
}
const headerStyle = {
    textAlign: 'center',
    padding: '10',
    background: '#58D68D'

}
export default Header
