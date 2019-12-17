import React, { Component } from 'react';
import { ProjectCards, AddInvestForm } from '../styled-components/components';
import InvestService from '../../services/InvestService';
import { withRouter } from 'react-router-dom';


const investService = new InvestService();

 class ProjectCardComponent extends Component {
  
  state = {
    projects:[],
    showInvest: false,
    form:{
      quantity:""
    }
  };

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      form:{
        ...this.state.form,
        [name]: value
      }
    });
  };

  toggle = () => {
  
    this.setState({ showInvest: true, 
      form:{
        project:this.props.project,
        quantity:"0"
      }
    });
  }

  addInvest = async e => {
    e.preventDefault();
    const { form } = this.state;
    const invest = await investService.createInvest(form)
    this.setState({
      form: {
        quantity:""
      }
    })

    this.props.history.push('/investor')
  }

  render() {
    return (
      <>
        <ProjectCards>
         
            <div>
              <img src={this.props.project.academic} alt="avg"/>
              <h2>Programa: {this.props.project.program}</h2>
              <small>Universidad: {this.props.project.university}</small>
              <p>Descripcion: {this.props.project.description}</p>
              <p>Tota:{this.props.project.total}</p>
              <p>Actual: {this.props.project.actual}</p>
              <p>Grade:{this.props.project.grade}</p>
              {/* <p>Academic: {this.props.project.academic}</p> */}
            </div>
            <button onClick={this.toggle}>Invierte</button>
            
            { this.state.showInvest ? (
              <AddInvestForm  onSubmit={this.addInvest}>
              <input 
                name="quantity"
                type="number"
                value= {this.state.quantity}
                onChange={this.inputChange}
              />
              <button>Aceptar</button>
              </AddInvestForm>
            ): "" }
    
        </ProjectCards>
      </>
    )
  }
}

export default  withRouter(ProjectCardComponent)