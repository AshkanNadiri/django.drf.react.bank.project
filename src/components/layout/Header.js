import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
    return (
        
      <header style={headerStyle}>
            <h1 style= {{color: '#fff'}}> MRM BANK</h1>
            <Link style={linkStyle} to="/">home</Link>
            <Link style={linkStyle} to="/branch">branches</Link>
            <Link style={linkStyle} to="/account">accounts</Link>
            <Link style={linkStyle} to="/customer">customers</Link>   
            <Link style={linkStyle} to="/product"> products</Link> 
      </header>
    )
   
}
const linkStyle = {
    color: '#fff',
    padding: '10px',
    fontSize: '15px',

    
}
const headerStyle = {
    textAlign: 'center',
    padding: '10',
    background: '#333333',
    borderBottom: '1px solid #555555'

}
export default Header
