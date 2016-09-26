import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>I be the homepage!!</h1>
        <input placeholder="What's the join code?" />
      </div>
    )
  }
}
