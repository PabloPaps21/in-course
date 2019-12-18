import React from 'react';
import { MyContext  } from '../../context';
import { StyledSignupForm } from '../styled-components/components';

export default class SignupContainer extends React.Component {

  componentDidUpdate() {
    if(this.context.loggedUser){
      if(this.context.user.role === 'Student'){
          return this.props.history.push('/student')
        } else {
          return this.props.history.push('/investor')
        }
    }
  }

  render(){
    return(
      <MyContext.Consumer>
      {context => (
        <>
        
        <StyledSignupForm onSubmit={e => {
          context.handleSignup(e)
            //props.history.push('/login')
          }}
        >
            
          <div>
          <h1> Sign up</h1>
            <input
                name="name"
                placeholder="Name"
                type="text"
                required
                value={context.formSignup.name}
                onChange={e => context.handleInput(e, 'formSignup')}
              />
            <input
              name="email"
              placeholder="e-mail"
              type="email"
              required
              value={context.formSignup.email}
              onChange={e => context.handleInput(e,'formSignup')}
            />
            <input
              name="password"
              placeholder="Password"
              type="password"
              required
              value={ context.formSignup.password }
              onChange={e => context.handleInput(e, 'formSignup')}
            />
            <input
              name="phone"
              placeholder="Phone"
              type="text"
              value={ context.formSignup.phone}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
            <input className="radio" type="radio" name="role" value="Student" onChange={e => context.handleInput(e, 'formSignup')} /> Student
            <input className="radio" type="radio" name="role" value="Investor"  onChange={e => context.handleInput(e, 'formSignup')}/> Investor
  
            {context.formSignup.role === 'Student' ? (
              <input 
                  name="aboutMe"
                  placeholder="aboutMe"
                  type= "text"
                  value={ context.formSignup.aboutMe}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />
                
            ): "" }
             
              
        
            
  
            <button type="primary" htmltype = "submit">
              Signup
            </button>
         
          </div>
      </StyledSignupForm>      
        </>
      )}
      </MyContext.Consumer>   
    )
  }
}

SignupContainer.contextType = MyContext