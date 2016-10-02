import React, { Component } from 'React'
import UsersGridListItem from './users-grid-list-item'

export default class UsersGridList extends Component {
  componentDidMount() {
    // @TODO Can't get the grid to work, undefined error but works in static comp
    //this.riGrid();
  }

  renderList() {
    return this.props.users.map((user) => {
      return <UsersGridListItem key={ user['id'] } user={ user } />
    });
  }

  render() {
    const usersList = this.renderList();

    return (
      <div id="fh5co-photos-section">
          <div id="ri-grid" className="ri-grid ri-grid-size-2">
            <img className="ri-loading-image" src="/i/loading.gif"/>
            <ul>
              { usersList }
            </ul>
          </div>
      </div>
    )
  }

  riGrid() {
    $('#ri-grid').gridrotator({
      rows : 3,
      columns : 6,
      w1024 : { rows : 3, columns : 6 },
      w768 : { rows : 3, columns : 6 },
      w480 : { rows : 3, columns : 3 },
      w320 : { rows : 2, columns : 2 },
      w240 : { rows : 1, columns : 1 },
      step: 'random',
      maxStep	: 2,
      // animation type
      // showHide || fadeInOut || slideLeft ||
      // slideRight || slideTop || slideBottom ||
      // rotateLeft || rotateRight || rotateTop ||
      // rotateBottom || scale || rotate3d ||
      // rotateLeftScale || rotateRightScale ||
      // rotateTopScale || rotateBottomScale || random
      animType : 'fadeInOut',
      interval : 600,
      animSpeed : 1000
    });
  }
}
