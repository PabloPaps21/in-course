import React from "react";
import { NavLink, Link } from 'react-router-dom';
import {StyledNavbar } from '../styled-components/components';

import { MyContext } from '../../context';
import { withRouter } from 'react-router-dom';

import { Navbar, Nav} from 'react-bootstrap'


const navbar = {backgroundColor: '#2fc3b6'};
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

                    <Link exact to="/investor" className="navbar-active">
                <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1576657740/inCourse/blanco_kyqbwq.png" alt="In-course" style={{ width:150 }}/>
                </Link> :
                  <Link exact to="/student" className="navbar-active">
                  <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1576657740/inCourse/blanco_kyqbwq.png" alt="In-course" style={{ width:150 }}/>
                </Link>              
                ) 
                :
                (<Link exact to="/" className="navbar-active">
                  <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1576657740/inCourse/blanco_kyqbwq.png" alt="In-course" style={{ width:150 }}/>
                </Link>)
                }

              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">

                  {!context.loggedUser && (
                <>
                  <NavLink exact to="/login" className="navbar-active" style={colorA}>
                    
                      Login
                 
                      
                  </NavLink>
                  <NavLink exact to="/signup" className="navbar-active" style={colorA}>
                    Signup
                </NavLink>
                </>
              )}
              {context.loggedUser ? (<NavLink exact to="/allprojects" className="navbar-active">
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