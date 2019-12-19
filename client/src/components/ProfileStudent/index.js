import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { MyContext } from '../../context';
import StudentService from '../../services/StudentService';
import MyProjectsCardComponent from '../ProfileStudent/MyProjectCardComponent'
import './studentProfile.css'

const studentService = new StudentService();


export default class ProfileStudent extends Component {
  state = {
    profile: {},
    projects:[]
  }

  async componentDidMount(){
    if(!this.context.loggedUser) return this.props.history.push('/login')
    const { data } = await studentService.projectList();
    this.setState({ 
      projects:data.listaProyectos.misProyectos
    })
  }
  
  
  render() {
    const { profile } = this.state
    return (
      <MyContext.Consumer>
        {context =><div className="container-profile">
          <div>
            <h1>Estudiante: {context.user.name}</h1>
          </div>

        <Link to="/create-project">Crear Proyecto</Link>
        
          {
            (this.state.projects) ?   
            this.state.projects.map((project, index) => {

            return <MyProjectsCardComponent key={index} project={project} i={index}/>
            
          }) : <h1>Aún no tienes proyectos</h1>
          
          }
        

      </div>}
      </MyContext.Consumer>
      
      
    )
  }
  
}


ProfileStudent.contextType=MyContext