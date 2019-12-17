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
    this.setState({ 
      showUpdateForm: true, 
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
        {/* <div>
          <h2>Cantidad: {this.props.invest.quantity}</h2>
        </div> */}
       
          {/* <img  src="https://d1dxvryen9goi5.cloudfront.net/wp-content/uploads/2019/10/estudiante.jpg" alt="academic"/> */}
          <img src={this.props.invest.projectId.academic} alt="acaddemic"/>
          <h1>Nombre del programa:{this.props.invest.projectId.program}</h1>
          <h1>Cantidad:{this.props.invest.quantity}</h1>




        <button onClick={this.toggle}>Update</button>
        
        {
          this.state.showUpdateForm ? (
            <AddInvestForm  onSubmit={this.updateInvest}>
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



}//clase   contatenar en la cadena de texto el id,  patch espera la nueva cantidad
