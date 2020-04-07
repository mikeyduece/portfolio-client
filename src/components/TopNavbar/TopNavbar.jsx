// Dependencies
import './TopNavbar.scss'
import React    from 'react'
import {
  Navbar,
  Nav
}               from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TopNavbar = props => {

  const isActive = path => path === props.match.path ? 'active' : ''

  return (
    <Navbar bg="dark" expand="sm" id='top-navbar' variant='dark' className='sticky-top'>
      <Navbar.Brand id='name-brand'><Link to='/'>Mike Heft</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to='/about' className={ `nav-link ${ isActive('/about') }` } role='button'>About</Link>
          <Link to='/projects' className={ `nav-link ${ isActive('/projects') }` } role='button'>Projects</Link>
          <Link to='/contact-me' className={ `nav-link ${ isActive('/contact-me') }` } role='button'>Contact Me</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopNavbar