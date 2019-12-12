import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectCards } from '../styled-components/components';


export default function ProjectCardComponent(props){
  console.log(props)
  return (
    <>
      <ProjectCards>
       
          <div>

          

            <h2>{props.project.program}</h2>
            <small>{props.project.university}</small>
            <p>PAPS</p>



          </div>

      </ProjectCards>
    </>
  )
}
