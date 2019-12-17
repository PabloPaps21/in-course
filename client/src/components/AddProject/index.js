import React, { Component } from "react";
import ProjectService from '../../services/ProjectService';
import { FormAddProject }  from "../../components/styled-components/components"

const projectService = new ProjectService();



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

  addProject = async e => {
    e.preventDefault();
    const { form } = this.state;
    const formData = new FormData()

    for(let key in this.state.form){
      formData.append(key, this.state.form[key])
    }
    formData.append('academic', this.state.file)

    const project = await projectService.createProject(formData)

    console.log(project);
    alert("Created!");
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
  };


  render(){
    return(
      <>
      <FormAddProject onSubmit={this.addProject}>
        <input 
        name="program"
        type="text" 
        value={this.state.form.program}
        onChange={this.inputChange}
        placeholder="Program"
        required
        />
        <input 
        name="university"
        type="text" 
        value={this.state.form.university}
        onChange={this.inputChange}
        placeholder="University"
        required
        />
        <input className="description"
        name="description"
        type="text" 
        value={this.state.form.description}
        onChange={this.inputChange}
        placeholder="Description"
        required
        />
        <label>calificacion</label>
        <input 
          name="grade"
          type="number"
          value={this.state.form.grade}
          onChange={this.inputChange}
          required
        />
        <label>ultima boleta</label>
        <input onChange={this.handleFile} type="file" name="academic" required/>
        <input 
        name="total"
        type="number" 
        value={this.state.form.total}
        onChange={this.inputChange}
        placeholder="Total"
        />
      <button>
        Create Project
      </button>
      </FormAddProject>
      <button>
        back
      </button>
      </>
    )
  }



}//class



export default  AddProject