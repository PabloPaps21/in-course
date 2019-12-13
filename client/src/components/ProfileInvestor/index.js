import React, { Component } from 'react';
import { StyleProfile } from '../styled-components/components';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context';
import InvestCardComponent from './InvestCardComponent';

export default class ProfileInvestor extends Component {
  state = {
    profile: {}
  }

  render() {
    const { profile } = this.state
    return (
        <MyContext.Consumer>
        {context =><StyleProfile>
        <div className="investor">
          <h1>Investor: {context.user.name}</h1>
          <InvestCardComponent />


        </div>
      </StyleProfile>}
      </MyContext.Consumer>
      
    )
  }
  
}