import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
function Header() {

  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)

  const location = useNavigate()
  return (
    <>
     <Navbar style={{position:'sticky',top:'0'}} collapseOnSelect expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand >
          <Link to={'/'} className='link'>
          <i className='fa-solid fa-shopping-cart me-3 text-white'></i>
            Shop N Shop
          </Link>
           
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Link to={"/wishlist"} className='link'> 
            <i className='fa-solid fa-heart text-danger me-2'></i>
             Wishlist
             <Badge pill bg="light">{wishlist.length} </Badge>
             </Link>
             <Link to={"/cart"} className='link'> 
            <i className='fa-solid fa-shopping-cart text-primary me-2'></i>
              Cart
              <Badge pill bg="light">{cart.length} </Badge>
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </>
  )
}

export default Header