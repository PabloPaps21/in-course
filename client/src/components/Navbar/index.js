import React from "react";
import { NavLink } from 'react-router-dom';
import {StyledNavbar} from '../styled-components/components';
import { MyContext } from '../../context';
import { withRouter } from 'react-router-dom';


function Navbar(props) {
    console.log(props)
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <StyledNavbar>
              <NavLink exact to="/" activeClassName="navbar-active">
                Home
              </NavLink>
              <NavLink exact to="/signup" activeClassName="navbar-active">
                Signup
              </NavLink>
              {!context.loggedUser && (
                <NavLink exact to="/login" activeClassName="navbar-active">
                  Login
                </NavLink>
              )}
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
            </StyledNavbar>
          )
        }}
      </MyContext.Consumer>
    )
  }
  
  export default withRouter(Navbar)