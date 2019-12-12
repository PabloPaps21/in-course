import React, { Component } from 'react';
import { StyleProfile } from '../styled-components/components';
import { Link } from 'react-router-dom'

export default class ProfileStudent extends Component {
  state = {
    profile: { }
  }

  render() {
    const { profile } = this.state
    console.log(profile)
    return (
      <StyleProfile>
        <div>
          <h1>Student</h1>
        </div>
      </StyleProfile>
      
    )
  }
  
}