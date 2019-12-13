import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import SignupContainer from './components/Signup'
import LoginContainer from './components/Login'
import Home from './components/Home/Home'
import ProfileStudent from './components/ProfileStudent'
import ProfileInvestor from  './components/ProfileInvestor'
import addProject from './components/AddProject'
import AllProjects from './components/AllProjects'
import CreateProject from './components/AddProject'
import Navbar from './components/Navbar'

function Routes() {
  return(
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={SignupContainer}/>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/student" component={ProfileStudent} />
        <Route exact path="/investor" component={ProfileInvestor} />
        <Route exact path="/addProject" component ={addProject} />
        
        <Route exact path="/allprojects" component = {AllProjects}/>
        <Route exact path="/create-project" component = {CreateProject}/>
        {/* <Route exact path="/investor" component={ProfileConainer}/> //perfil de investor */}
      </Switch>
    </BrowserRouter>
  )
}


export default Routes;