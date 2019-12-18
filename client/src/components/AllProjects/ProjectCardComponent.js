import React, { Component } from 'react';
import { ProjectCards, AddInvestForm } from '../styled-components/components';
import InvestService from '../../services/InvestService';
import { withRouter } from 'react-router-dom';
import { MyContext } from '../../context';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const investService = new InvestService();

const dissapear = {
  display:'none'
}

const imgModal = {
  width: '300px',
  display: 'block',
  margin: 'auto'
}
 class ProjectCardComponent extends Component {
  
  state = {
    projects:[],
    showInvest: false,
    form:{
      quantity:""
    },
    isShowing: false,
    result: 0,
    porcentaje:0
  };

  handleClose = () => {
		this.setState({ show: false });
	}
  
	handleShow = () => {
		this.setState({ show: true });
  }

  handleZoomIn = () => {
    this.setState({mostrar: true})
  }
  handleZoomOut = () => {
    this.setState({mostrar:false})
  }
  

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
    let prende = !this.state.showInvest

    this.setState({ showInvest: prende, 
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

  openModalHandler = () => {
    this.setState({
      isShowing:true
    })
  }
  closeModalHandler = () => {
    this.setState({
      isShowing:false
    })
  }

  handleModal = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      result: value * this.calculadora()
    });
  }

  calculadora = () => {  
    
    if( this.props.project.grade >=  9 &&  this.props.project.grade <= 10 ){
      this.state.porcentaje = 3.5; 
    }else if( this.props.project.grade <= 8.9 && this.props.project.grade >= 7){
      this.state.porcentaje = 4.2;
    }

    let rendimiento =  (1 + (this.state.porcentaje / 100))

    return Number(rendimiento.toFixed(2))


  }

  
  render() {
    return (
      
      <MyContext.Consumer>
        {context => {
          return (

        <ProjectCards>
         
            <div>

              <img src={this.props.project.academic} alt="avg" onClick={this.handleZoomIn}/>
              <>
                <Modal show={this.state.mostrar} onHide={this.handleZoomOut}>
                  <Modal.Header closeButton>
                      <Modal.Title>Boleta</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <img src={this.props.project.academic} alt="avg" style={imgModal} />
                  </Modal.Body>
                </Modal>
              </>

              <h2>Programa: {this.props.project.program}</h2>
              <small>Universidad: {this.props.project.university}</small>
              <p>Descripcion: {this.props.project.description}</p>
              <p>Total:{this.props.project.total}</p>
              <p>Actual: {this.props.project.actual}</p>
              <p>Grade:{this.props.project.grade}</p>
            </div>
            
            
            <>
				<Button variant="primary" onClick={this.handleShow}>
					Calculadora
        </Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Calculadora</Modal.Title>
					</Modal.Header>
					<Modal.Body>
          Aquí podrás calcular el rendimiento anual
          <label>Coloca la cantidad a invertir </label>
          <input name="pago" type="Number"  onChange={this.handleModal}/>
          <p>Porcentaje:{this.state.porcentaje} </p>
          <p>Calificación: {this.props.project.grade}</p>
          <p>El rendimiento es de: {this.state.result}</p>
          </Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Cerrar
            </Button>
					</Modal.Footer>
				</Modal>
			</>
            {
              context.user.role === 'Student' ?
              (<button onClick={this.toggle} style={dissapear}>Invierte</button>) : (<button onClick={this.toggle}>Invierte</button>)
              
            }
            
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
        )
        }}
      </MyContext.Consumer>
    )
  }
}

export default  withRouter(ProjectCardComponent)