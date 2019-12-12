import React, { Component } from 'react';
import ProjectCardComponent from './ProjectCardComponent';
import ProjectService from '../../services/ProjectService';

const projectService = new ProjectService();

export default class AllProjects extends Component {
    state = {
        projects:[]
    };
    async componentDidMount(){
        const {
            data: { projects }
        } = await projectService.getProjects();
        console.log(projects)
            this.setState({
                projects
            })
    }

    render(){
        console.log(this.state.projects)
        console.log('hola')
        return(
            <>
            <h1>Projects</h1>
            {this.state.projects.map((project, index)=>{
                return <ProjectCardComponent project={project} i={index} />
            })}
            </>
        )
    }
}