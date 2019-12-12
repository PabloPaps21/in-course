import React, { Component } from 'react';
import { StyleProfile } from '../styled-components/components';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context';

export default class ProfileInvestor extends Component {
  state = {
    profile: {}
  }

  render() {
    const { profile } = this.state
    console.log(profile)
    return (
        <MyContext.Consumer>
        {context =><StyleProfile>
        <div>
          <h1>Investor: {context.user.name}</h1>
        </div>
      </StyleProfile>}
      </MyContext.Consumer>
      
    )
  }
  
}