import React from 'react'
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import SignupContainer from './components/Signup'
import LoginContainer from './components/Login'
import Home from './components/Home/Home'
import ProfileContainer from './components/ProfileStudent'
import Navbar from './components/Navbar'

function Routes() {
  return(
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={SignupContainer}/>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/student" component={ProfileContainer} />
        {/* <Route exact path="/investor" component={ProfileConainer}/> //perfil de investor */}
      </Switch>
    </BrowserRouter>
  )
}


export default Routes;