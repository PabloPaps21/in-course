import React from 'react';
import { MyContext  } from '../../context';
import { StyledSignupForm } from '../styled-components/components';


const divPadre = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height:'100vh'
}


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
        <div style={divPadre}>
        
        <StyledSignupForm onSubmit={e => {
          context.handleSignup(e)
            //props.history.push('/login')
          }}
        >
            
          <div>
          <h1> Regístrate</h1>
            <input
                name="name"
                placeholder="Nombre"
                type="text"
                required
                value={context.formSignup.name}
                onChange={e => context.handleInput(e, 'formSignup')}
              />
            <input
              name="email"
              placeholder="Correo"
              type="email"
              required
              value={context.formSignup.email}
              onChange={e => context.handleInput(e,'formSignup')}
            />
            <input
              name="password"
              placeholder="Contraseña"
              type="password"
              required
              value={ context.formSignup.password }
              onChange={e => context.handleInput(e, 'formSignup')}
            />
            <input
              name="phone"
              placeholder="Teléfono"
              type="text"
              value={ context.formSignup.phone}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
            <div className="radios">
            <label>Elige el tipo de usuario</label>
            <br/>
              <input className="radio" type="radio" name="role" value="Student" onChange={e => context.handleInput(e, 'formSignup')} /> Estudiante
              <input className="radio" type="radio" name="role" value="Investor"  onChange={e => context.handleInput(e, 'formSignup')}/> Inversionista
            </div>
  
            {context.formSignup.role === 'Student' ? (
              <input 
                  name="aboutMe"
                  placeholder="Sobre mí"
                  type= "text"
                  value={ context.formSignup.aboutMe}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />
                
            ): "" }
             
              
        
            
  
            <button type="primary" htmltype = "submit">
              Regístrate
            </button>
         
          </div>
      </StyledSignupForm>      
        </div>
      )}
      </MyContext.Consumer>   
    )
  }
}

SignupContainer.contextType = MyContext