import React, {Component} from 'react';
import { ProjectCards } from '../styled-components/components'
import StudentService from '../../services/StudentService'

const studentService = new StudentService();

export default  class MyProjectsCardComponent extends Component {
  state = {
    projects:[]
  }




  render() {
    return  (
      <>
          <ProjectCards>
              <h1>Programa: {this.props.projects.misProyectos.program}</h1>
          </ProjectCards>
      </>
  
    )
  }
}