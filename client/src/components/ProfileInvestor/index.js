import React, { Component } from 'react';
import { StyleProfile } from '../styled-components/components';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context';
import InvestCardComponent from './InvestCardComponent';
import InvestService from '../../services/InvestService';

const investService = new InvestService();


export default class ProfileInvestor extends Component {
  state = {
    profile: {},
    invests: []
  }

  async componentDidMount() {
    const { data } = await investService.getInvestments();
    console.log(data)
    this.setState({
      invests: data.investments
    })
  }



  
  
  render() {
    const { profile } = this.state

    return (
        <MyContext.Consumer>
        {context =><StyleProfile>
        <div className="investor">
          <h1>Investor: {context.user.name}</h1>
          
          {this.state.invests.map((invest, index) => {

            return <InvestCardComponent  invest={invest} i={index} />
          })}


        </div>
      </StyleProfile>}
      </MyContext.Consumer>
      
    )
  }
  
}