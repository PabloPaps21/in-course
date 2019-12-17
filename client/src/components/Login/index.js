import React from 'react'
import { MyContext } from '../../context'
import { StyledLoginForm } from '../styled-components/components'
import { Link } from 'react-router-dom'
import { findByLabelText } from '@testing-library/react'


const divPadre = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height:'90vh'
}


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

          <div style={divPadre}>
          <StyledLoginForm onSubmit={e => {
            context.handleLogin(e, (path) => {
              this.props.history.push(path)
            });
          }} 
          >
          <div>
            <h1>Entra.</h1>
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
          
            <p>¿Aún no tienes cuenta?  <Link to="/signup">Regístrate aquí</Link></p>  
            </div>
          </StyledLoginForm>
          </div>
          
        )}
      </MyContext.Consumer>
    )
  }
}//class

LoginContainer.contextType = MyContext