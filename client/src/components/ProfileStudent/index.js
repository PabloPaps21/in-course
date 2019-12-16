import React, { Component } from 'react';
import { StyleProfile, ProjectCards } from '../styled-components/components';
import { Link } from 'react-router-dom'
import { MyContext } from '../../context';
import StudentService from '../../services/StudentService';

const studentService = new StudentService();


export default class ProfileStudent extends Component {
  state = {
    profile: {},
    projects:[]
  }

  async componentDidMount(){
    const { data} = await studentService.projectList();
    this.setState({ 
      projects:data.listaProyecto
    })
  }

  render() {
    const { profile } = this.state
    console.log(profile)
    return (
      <MyContext.Consumer>
        {context =><StyleProfile>
          <div>
            <h1>Student: {context.user.name}</h1>
            <h2>Hola?</h2>
          </div>

        
          {/* { this.state.projects.map((project, index) => {

            return <ProjectCards key={index} project={project} i={index}/>
            
          })} */}
        

        <Link to="/create-project">Crear Proyecto</Link>
      </StyleProfile>}
      </MyContext.Consumer>
      
      
    )
  }
  
}