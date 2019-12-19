import React, { Component } from 'react';
import ProjectCardComponent from './ProjectCardComponent';
import ProjectService from '../../services/ProjectService';
import './allProjects.css'

const projectService = new ProjectService();

export default class AllProjects extends Component {
  state = {
    projects:[]
  };

  
  async componentDidMount(){
      await this.getData()
  }

  async getData(){
    const { data: { projects } } = await projectService.getProjects();
    this.setState({
      projects
    })
  }
  

  render(){
    return(
      <div className="container-profile">
        <h1>Proyectos</h1>
        <div className="investor">
        {
          (this.state.projects) ?
          (this.state.projects.map((project, index)=>{
            return <ProjectCardComponent key={index} refreshData={() => {this.getData()}} project={project} i={index} />
        })) :  <h1>No hay proyectos</h1>
        }
        </div>
      </div>
    )
  }
}