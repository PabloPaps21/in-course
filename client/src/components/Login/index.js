import React from 'react'
import { MyContext } from '../../context'
import { StyledLoginForm } from '../styled-components/components'
import { Link } from 'react-router-dom'

export default class LoginContainer extends React.Component {
  componentDidMount(){
    console.log(this.context)
    if(this.context.loggedUser){
        console.log('adentro')
        return this.props.history.push('/profile')
    }
  }

  render(){
    return (
      <MyContext.Consumer>
        { context => (
          <StyledLoginForm onSubmit={e => {
            context.handleLogin(e, (path) => {
              this.props.history.push(path)
            });
          }} 
          >
          <div>
            <input
              name="email"
              placeholder="e-mail"
              type="email"
              required
              value={context.loginForm.email}
              onChange={e => context.handleInput(e,'loginForm')}
            />
            <input
              name="password"
              placeholder="Password"
              type="password"
              required
              value={ context.loginForm.password }
              onChange={e => context.handleInput(e, 'loginForm')}
            />

          <button htmltype = "submit">
            Login
          </button>
          
            <p>if you dont have a account yet, you can create your account <Link to="/signup">here</Link></p>  
            </div>
          </StyledLoginForm>
        )}
      </MyContext.Consumer>
    )
  }
}//class

LoginContainer.contextType = MyContext