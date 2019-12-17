import React from "react";
import { NavLink, Link } from 'react-router-dom';
import {StyledNavbar } from '../styled-components/components';

import { MyContext } from '../../context';
import { withRouter } from 'react-router-dom';

import { Navbar, Nav} from 'react-bootstrap'


const navbar = {backgroundColor: '#7e4ef5'};
const colorA = {
  color:'#FFF',
  marginRight: 10 
}

function NavbarR(props) {
    console.log(props)
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <Navbar style={navbar} expand="lg">
              <Navbar.Brand href="#home">

                {
                  context.loggedUser ? ( 
                    context.user.role === 'Investor' ?  

                    <NavLink exact to="/investor" activeClassName="navbar-active">
                <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1576573185/inCourse/Incourse-logo_khauti.png" alt="In-course" style={{ width:150 }}/>
                </NavLink> :
                  <NavLink exact to="/student" activeClassName="navbar-active">
                  <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1576573185/inCourse/Incourse-logo_khauti.png" alt="In-course" style={{ width:150 }}/>
                </NavLink>              
                ) 
                :
                (<NavLink exact to="/" activeClassName="navbar-active">
                  <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1576573185/inCourse/Incourse-logo_khauti.png" alt="In-course" style={{ width:150 }}/>
                </NavLink>)
                }

              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">

                  {!context.loggedUser && (
                <>
                  <NavLink exact to="/login" activeClassName="navbar-active" style={colorA}>
                    
                      Login
                 
                      
                  </NavLink>
                  <NavLink exact to="/signup" activeClassName="navbar-active" style={colorA}>
                    Signup
                </NavLink>
                </>
              )}
              {context.loggedUser ? (<NavLink exact to="/allprojects" activeClassName="navbar-active">
                Projects
              </NavLink>)
              : ""

              }
              
              {context.loggedUser && (
                <span
                  onClick={() =>
                    context.handleLogout(() => {
                      props.history.push('/login')
                    })
                  }
                >
                  Logout
                </span>
              )}
                </Nav>

              </Navbar.Collapse>
            </Navbar>
          )
        }}
      </MyContext.Consumer>
    )
  }
  
  export default withRouter(NavbarR)