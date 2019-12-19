import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
     <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
   
}
const linkStyle = {
    color: '#000',
    padding: '10px',
    
}
linkStyle.hover = {
    backgroundColor: '#239B56',
    color: '#fff'
}
const headerStyle = {
    textAlign: 'center',
    padding: '10',
    background: '#58D68D'

}
export default Header
<Link style={linkStyle} to="/">home</Link>
<Link style={linkStyle} to="/branch">branch</Link>
<Link style={linkStyle} to="/account">account</Link>
<Link style={linkStyle} to="/customer">customer</Link>   
<Link style={linkStyle} to="/product"> product</Link> 
