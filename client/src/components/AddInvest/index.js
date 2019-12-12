import React, { Component } from 'react';
import axios from 'axios';

import { FormAddInvest } from '../../components/styled-components/components'

export default class AddInvest extends Component {

  state = {
    form:{
        quantity:""
    }
  };

  inputChange = ({ target: { value, name} }) => {
    this.setState({
      ...this.setState,
      form:{
        ...this.state.form, 
        [name]:value
      }
    });
  };

  addProject = async e => {
    e.preventDefault();
    const { form } = this.state;
    const { data } = await axios.post();
    console.log(data);
    alert("Created!");
    this.setState({
      form: {
        quantity:""
      }
    })
  };

  render(){
    return(
      <FormAddInvest onSubmit = {this.AddInvest}>
      <label>Cantidad a invertir</label>
        <input 
        name="quantity"
        type="number"
        onChange={this.inputChange}
        required
        />
        <button>
          Invierte
        </button>
      </FormAddInvest>
    )

  }
}