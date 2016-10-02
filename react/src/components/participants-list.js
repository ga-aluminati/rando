import React, { Component } from 'React'
import ParticipantsListItem from './participants-list-item'

export default class ParticipantsList extends Component {
  renderList() {
    return this.props.users.map((user) => {
      return <ParticipantsListItem key={ user['id'] } user={ user } highlight={ (this.props.highlightUsers.indexOf(user['id']) > -1) ? '1' : '' } />
    });
  }

  render() {
    const participantsList = this.renderList();

    return (
      <div>
        <div className="participants-header">{ this.props.users.length } participants</div>
        <div className="row">
          <div className="participants">
            { participantsList }
          </div>
        </div>
      </div>
    )
  }
}
