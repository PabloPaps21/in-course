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
              {
                context.loggedUser ? ( 
                  context.user.role === 'Investor' ?  

                  <NavLink exact to="/investor" activeClassName="navbar-active">
                <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1574927180/dynamic/naranaja_raqsp2.png" alt="In-course"/>
              </NavLink> :
                 <NavLink exact to="/student" activeClassName="navbar-active">
                <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1574927180/dynamic/naranaja_raqsp2.png" alt="In-course"/>
              </NavLink>
              
              
              ) 
              :
              (<NavLink exact to="/" activeClassName="navbar-active">
                <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1574927180/dynamic/naranaja_raqsp2.png" alt="In-course"/>
              </NavLink>)
              }

              <div>


              {context.loggedUser ? (<NavLink exact to="/allprojects" activeClassName="navbar-active">
                Projects
              </NavLink>)
              : ""

              }
              
              




              {!context.loggedUser && (
                <>
                  <NavLink exact to="/login" activeClassName="navbar-active">
                    Login
                  </NavLink>
                  <NavLink exact to="/signup" activeClassName="navbar-active">
                    Signup
                </NavLink>
                </>
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
              </div>
              
            </StyledNavbar>
          )
        }}
      </MyContext.Consumer>
    )
  }
  
  export default withRouter(Navbar)