import React, { Component } from 'react';
import InvestService from '../../services/InvestService';
import  {InvCards, AddInvestForm} from '../styled-components/components';

const investService = new InvestService();

export default class InvestCardComponent extends Component {
    
  state = {
    showUpdateForm: false,
    form: { 
      quantity:""
    },
    
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
    let prende = !this.state.showUpdateForm
    this.setState({ 
      showUpdateForm: prende, 
      form: {
        quantity: this.props.invest.quantity,
      }
    });
  }

  updateInvest = async e =>{
    e.preventDefault();
    const { form } = this.state;
    await investService.updateInvestment(this.props.invest._id, form)
    this.props.refreshData();
  }

  delInvest = async e => {
    await investService.deleteInvest(this.props.invest._id)
    this.props.refreshData()
  }

  render() {
    return (
      <>
      <InvCards>       
          {/* <img  src="https://d1dxvryen9goi5.cloudfront.net/wp-content/uploads/2019/10/estudiante.jpg" alt="academic"/> */}
          <img src={this.props.invest.projectId.academic} alt="academic"/>
          <h1>Nombre del programa:{this.props.invest.projectId.program}</h1>
          <h1>Mi inversión:{this.props.invest.quantity}</h1>
          <h2>Total del proyecto: {this.props.invest.projectId.total}</h2>
          <h2>Actual:{this.props.invest.projectId.actual}</h2>




        <button onClick={this.toggle}>Update</button>
        
        {
          this.state.showUpdateForm ? (
            <AddInvestForm  onSubmit={this.updateInvest}>
            <h5>Nuevo valor de mi inversión</h5>
            <input 
              name="quantity"
              type="number"
              value= {this.state.form.quantity}
              onChange={this.inputChange}
              />
              <button>Aceptar</button>
            </AddInvestForm>
          )  : "" }






        <button onClick={this.delInvest}>Delete</button>
      </InvCards>
      </>
    )
  }



}//clase
