import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectCards } from '../styled-components/components';


export default function ProjectCardComponent(props){
  console.log(props)
  return (
    <>
      <ProjectCards>
       
          <div>
            <h2>Programa: {props.project.program}</h2>
            <small>Universidad: {props.project.university}</small>
            <p>Descripcion: {props.project.description}</p>
            <p>Tota:{props.project.total}</p>
            <p>Actual: {props.project.actual}</p>
            <p>Grade:{props.project.grade}</p>
            <p>Academic: {props.project.academic}</p>
          </div>
          <button>Invertir</button>
      </ProjectCards>
    </>
  )
}
