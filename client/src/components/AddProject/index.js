import React, { Component } from "react";
import ProjectService from '../../services/ProjectService';
import { FormAddProject }  from "../../components/styled-components/components"


const projectService = new ProjectService();

const divPadre = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height:'100vh',
  flexDirection:'column'
}
const atras ={
  backgroundColor:'#eb4444'
}

 class AddProject extends Component {
  
  state = {
    file:{},
    form: {
      description:"",
      university:"",
      program:"",
      total:"",
      grade:"",
      academic:""
    }
  };

  inputChange = ({ target: {value, name} }) =>{
    this.setState({
      ...this.state,
      form:{
        ...this.state.form,
        [name]:value
      }
    });
  };

  handleFile = e => {
    this.setState({ file: e.target.files[0] })
  }
  goAtras = () => {
    this.props.history.goBack()
  }
  addProject = async e => {
    e.preventDefault();
    const { form } = this.state;
    const formData = new FormData()

    for(let key in this.state.form){
      formData.append(key, this.state.form[key])
    }
    formData.append('academic', this.state.file)

    const project = await projectService.createProject(formData)

    this.setState({ 
      form: {
        description:"",
        university:"",
        program:"",
        total:"",
        actual:"",
        grade:"",
        academic:""
      }
    })
    this.props.history.push('/student')
  };


  render(){
    return(


     
      <div style={divPadre}>
       <h1> Crea tu proyecto</h1>
      <FormAddProject onSubmit={this.addProject} >
        <input 
        name="program"
        type="text" 
        value={this.state.form.program}
        onChange={this.inputChange}
        placeholder="Programa"
        required
        />
        <input 
        name="university"
        type="text" 
        value={this.state.form.university}
        onChange={this.inputChange}
        placeholder="Universidad"
        required
        />
        <input className="description"
        name="description"
        type="text" 
        value={this.state.form.description}
        onChange={this.inputChange}
        placeholder="Describe tu proyecto"
        required
        />
        <input 
          name="grade"
          type="number"
          value={this.state.form.grade}
          onChange={this.inputChange}
          required
          min="7" max="10"
          placeholder="Última calificación (número)"
        />
        <label>Sube tu última boleta</label>
        <input onChange={this.handleFile} type="file" name="academic" required/>
        <input 
        name="total"
        type="number" 
        value={this.state.form.total}
        onChange={this.inputChange}
        placeholder="Total a  financiar (número)"
        />
      <button>
        Crear Proyecto
      </button>
      <button onClick={this.goAtras} style={atras}>
        Atrás
      </button>
      </FormAddProject>
      
      </div>
    )
  }



}//class



export default  AddProject