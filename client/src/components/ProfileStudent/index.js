import React, { Component } from 'react';
import { StyleProfile, ProjectCards } from '../styled-components/components';
import { Link } from 'react-router-dom'
import { MyContext } from '../../context';
import StudentService from '../../services/StudentService';
import MyProjectsCardComponent from '../ProfileStudent/MyProjectCardComponent'

const studentService = new StudentService();


export default class ProfileStudent extends Component {
  state = {
    profile: {},
    projects:[]
  }

  async componentDidMount(){
    const { data } = await studentService.projectList();
    console.log(data)
    this.setState({ 
      projects:data.listaProyectos.misProyectos
    })
  }
  
  
  render() {
    const { profile } = this.state
    return (
      <MyContext.Consumer>
        {context =><StyleProfile>
          <div>
            <h1>Student: {context.user.name}</h1>
            <h2>Hola</h2>
          </div>

        
          {
            (this.state.projects) ?   
            this.state.projects.map((project, index) => {

            return <MyProjectsCardComponent key={index} project={project} i={index}/>
            
          }) : <h1>Aún no tienes proyectos</h1>
          
          }
        

        <Link to="/create-project">Crear Proyecto</Link>
      </StyleProfile>}
      </MyContext.Consumer>
      
      
    )
  }
  
}