import React from 'react';
import { StyleCards } from "../../components/styled-components/components"


function DetailProject(props){
  return (
    <StyleCards>
      <article>
      <h1>Programa: {props.program}</h1>
      <h2>University: {props.university}</h2>
      <h2>Student name: Como lo jalo?</h2>
      <p>Description: {props.description}</p>
      <h2>Total: {props.total} </h2>
      <h2>Actual: {props.actual}</h2>
      <button>Invertir</button>
      </article> 
    </StyleCards>
  )
}

export default DetailProject;