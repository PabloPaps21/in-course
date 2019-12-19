import React from 'react'
import { MyContext } from '../../context'
import { StyledLoginForm } from '../styled-components/components'
import { Link } from 'react-router-dom'


const divPadre = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height:'90vh'
}


export default class LoginContainer extends React.Component {

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
              placeholder="correo"
              type="email"
              required
              value={context.loginForm.email}
              onChange={e => context.handleInput(e,'loginForm')}
            />
            <input
              name="password"
              placeholder="Contraseña"
              type="password"
              required
              value={ context.loginForm.password }
              onChange={e => context.handleInput(e, 'loginForm')}
            />

          <button htmltype = "submit">
            Entra
          </button>
          
            <p>¿Aún no tienes cuenta?  <Link to="/signup" className="reg-here">Regístrate aquí</Link></p>  
            </div>
          </StyledLoginForm>
          </div>
          
        )}
      </MyContext.Consumer>
    )
  }
}//class

LoginContainer.contextType = MyContext