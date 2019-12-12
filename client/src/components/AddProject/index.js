import React, { Component } from "react";
import axios from 'axios';

import { FormAddProject }  from "../../components/styled-components/components"


export default class AddProject extends Component {

  state = {
    file:{},
    form: {
      description:"",
      university:"",
      program:"",
      total:"",
      actual:"",
      grade:"",
      academic:""
    }
  };

  inputChange = ({ target: {value, name} }) =>{
    this.setState({
      ...this.setState,
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
    const { data } = await axios.post();
    console.log(data);
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
        value={this.state.form.program}
        onChange={this.inputChange}
        placeholder="Total"
        required
        />
      {/* actual? como lo marco? */}
      <label>actual: ??????</label>

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



