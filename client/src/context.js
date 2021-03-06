import React, { Component, createContext} from 'react';
import AUTH_SERVICE from './services/AuthService';
import Swal from 'sweetalert2';

export const MyContext = createContext()

class MyProvider extends Component {
  state = {
      loggedUser: false,
      formSignup: {
          name: '',
          email: '',
          password: '',
          phone: '',
          aboutMe:'',
          role: ''
      },
      loginForm: {
          email:'',
          password:''
      },
      user: {}
  }

  componentDidMount(){
    if(document.cookie) {
      AUTH_SERVICE.getUser()
      .then(( { data }) => {
        this.setState({loggedUser: true, user: data.user})
      })
      .catch(err => console.log(err))
    }
  }
  
  handleInput = (e, obj) => {
    const a = this.state[obj]
    const key = e.target.name
    a[key] = e.target.value
    this.setState({obj: a})
  }

  handleSignup = async e => {
    e.preventDefault()
    try {
      let data = await AUTH_SERVICE.signup(this.state.formSignup)
      Swal.fire({
        title:` ${this.state.formSignup.name}`, 
        text:'User created', 
        icon:'success',
        type: "success"}).then(okay => {
          if (okay) {
           window.location.href = "/login";
         }
      })
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El correo ya existe'
      })
    }
  }

  handleLogin = (e, cb)=> {
    e.preventDefault()
    AUTH_SERVICE.login(this.state.loginForm)
    .then(({ data }) => { 
      if(data.user.role === 'Student'){
        this.setState({ loggedUser : true, user: data.user })
        return cb('/student')
      } else if (data.user.role === 'Investor'){
        this.setState({ loggedUser : true, user: data.user })
        return cb('/investor')
        
      }
    })
    .catch(err => {
     
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Correo o contraseña incorrectos',
      })
    })
  }

  handleLogout = async cb => {
    await AUTH_SERVICE.logout()
    window.localStorage.clear()
    this.setState({ loggedUser: false, user: {} })
    cb()
  }

  handleFile = async (e) => {
    this.setState( { file: e.target.files[0] })
  }



  render(){
      return(
        <MyContext.Provider
        value = {{
          loggedUser: this.state.loggedUser,
          formSignup: this.state.formSignup,
          loginForm: this.state.loginForm,
          handleInput: this.handleInput,
          handleSignup: this.handleSignup,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          handleFile: this.handleFile,
          user:this.state.user
        }}
        >
        {this.props.children}
        </MyContext.Provider>
      )
  }
}

export default MyProvider