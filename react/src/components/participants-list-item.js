import React, { Component } from 'React'

export default (props) => {
  return (
    <div className={ (props.highlight) ? 'active item' : 'item' }>
      <div className="participant">
        <img alt={ props.user.name } src={ props.user.thumbnail_url } className="pull-left" />
        <div className="pull-left">
          <span>{ props.user.name }</span>
        </div>
      </div>
    </div>
  )
}
