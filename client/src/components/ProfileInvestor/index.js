import React, { Component } from 'react';
import { MyContext } from '../../context';
import InvestCardComponent from './InvestCardComponent';
import InvestService from '../../services/InvestService';
import './profileInvestor.css'

const investService = new InvestService();

// const investor = {
//     display: 'flex',
//     justifyContent: 'flex-start',
//     flexDirection: 'row',
//     width: 900,
//     flexWrap: 'wrap'
// }


export default class ProfileInvestor extends Component {
  state = {
    profile: {},
    invests: []
  }

  async componentDidMount() {
    if(!this.context.loggedUser) return this.props.history.push('/login')
    await this.getData()
  }

  async getData(){
    const { data } = await investService.getInvestments();
    this.setState({
      invests: data.investments
    })
  }


  
  
  render() {
    const { profile } = this.state
    
    return (
        <MyContext.Consumer>
        {context =><div className="container-profile">
          <h1>Inversionista: {context.user.name}</h1>
        <div className="investor">
          
          {
            (this.state.invests) ? 
            this.state.invests.map((invest, index) => {

              return <InvestCardComponent key = {index} refreshData={() => {this.getData()}} invest={invest} i={index} />
            }) :  <h1>Aún no tienes proyectos</h1>
          
          }
        </div>
      </div>}
      </MyContext.Consumer>
      
    )
  }
  
}

ProfileInvestor.contextType=MyContext