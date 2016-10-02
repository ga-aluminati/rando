import React, { Component } from 'React'

export default class UsersGridListItem extends Component {
  render() {
    return (
      <li>
        <img alt={ this.props.user.name } src={ this.props.user.thumbnail_url } />
      </li>
    )
  }
}
