import React, { Component } from 'react';
import InvestService from '../../services/InvestService';
import  {InvCards, AddInvestForm} from '../styled-components/components';



export default class InvestCardComponent extends Component {
    
  state = {
    showUpdateForm: false,
    form:{ 
      quantity:"" //como jalar la info de ese input
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
      form:{
        invest:this.props.invest,
        quantity:""
      }
      
    })

  }

  updateInvest = async e =>{
    e.preventDefault();
    const { form } = this.state;
    const invest = await InvestService.updateInvestment(form)
    alert("modificado");
    this.setState({
      form:{
        invest:this.props.invest
      }
    })
  }

  borrarInvest = async e =>{
    const delInvest = await InvestService.deleteInvest()
  }

  render() {
    return (
      <>
      <InvCards>
        {/* <div>
          <h2>Cantidad: {this.props.invest.quantity}</h2>
        </div> */}
       
          <img  src="https://d1dxvryen9goi5.cloudfront.net/wp-content/uploads/2019/10/estudiante.jpg" alt="academic"/>
          <h1>Nombre del programa: </h1>
          <h1>Cantidad: </h1>




        <button onClick={this.toggle}>Update</button>
        
        {
          this.state.showUpdateForm ? (
            <AddInvestForm  onSubmit={this.updateInvest}>
            <input 
              name="quantity"
              type="number"
              value= {this.state.quantity}
              onChange={this.inputChange}
              />
              <button>Aceptar</button>
            </AddInvestForm>
          )  : "" }






        <button>Delete</button>
      </InvCards>
      </>
    )
  }



}//clase   contatenar en la cadena de texto el id,  patch espera la nueva cantidad
