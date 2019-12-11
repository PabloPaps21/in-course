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
            context.handleLogin(e, () => {
              this.props.history.push('/profile')
            });
          }} 
          >
          <input
                  value={context.loginForm.email}
                  type="Email"
                  placeholder="Email"
                  name="email"
                  onChange={e => context.handleInput(e, 'loginForm')}
                />
              <br/>
              <br/>
              <label htmlFor="password">Password</label>
              <br/>
              <input
                  name="password"
                  type="password"
                  placeholder="Password"
                onChange={e => context.handleInput(e, 'loginForm')}
                value={context.loginForm.password}
                />
                <br/>
              <br/>
              <button type="primary" htmlType="submit">
                  Login
                </button>

            <p>if you dont have a account yet, you can create your account <Link to="/signup">here</Link></p>

            
          </StyledLoginForm>
        )}
      </MyContext.Consumer>
    )
  }
}//class
LoginContainer.contextType = MyContext