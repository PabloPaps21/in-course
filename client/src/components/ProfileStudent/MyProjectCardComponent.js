import React, {Component} from 'react';
import { ProjectCards } from '../styled-components/components'
import StudentService from '../../services/StudentService'

const studentService = new StudentService();

export default  class MyProjectsCardComponent extends Component {

  render() {
    console.log(this.props.project.program)
    return  (
      
      <ProjectCards>
        <h1>Programa: {this.props.project.program} </h1>
        <h2>Total: {this.props.project.total}</h2>
        <h3>Actual: {this.props.project.actual}</h3>
      </ProjectCards>
    
  
    )
  }
}