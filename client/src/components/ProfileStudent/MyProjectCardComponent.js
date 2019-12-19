import React, {Component} from 'react';
import { ProjectCards } from '../styled-components/components'
import StudentService from '../../services/StudentService'

const studentService = new StudentService();

export default  class MyProjectsCardComponent extends Component {

  render() {
    return  (
      
      <ProjectCards>
        <h2>Programa: {this.props.project.program} </h2>
        <p>Total: {this.props.project.total}</p>
        <p>Actual: {this.props.project.actual}</p>
      </ProjectCards>
    
  
    )
  }
}