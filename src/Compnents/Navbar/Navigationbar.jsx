import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"

import { NavLink } from 'react-router-dom';

const Navigationbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="navlink-style"><span style={{fontWeight: 'bolder', color: 'AppWorkspace'}}>HST</span></NavLink>
          <Nav className="ms-auto">
            <NavLink to="/" className="navlink-style">Author</NavLink>
            <NavLink to="/MostLikedPost" className="navlink-style">MostLikedPost</NavLink>
            <NavLink to="/MostCommentPost" className="navlink-style">MostCommentPost</NavLink>
          </Nav>
        </Container>
      </Navbar>      
    </>
  )
}

export default Navigationbar