import React, { Component } from 'react';
import ProjectCardComponent from './ProjectCardComponent';
import ProjectService from '../../services/ProjectService';

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
      <>
        <h1>Projects</h1>
        {this.state.projects.map((project, index)=>{
            return <ProjectCardComponent key={index} refreshData={() => {this.getData()}} project={project} i={index} />
        })}
      </>
    )
  }
}