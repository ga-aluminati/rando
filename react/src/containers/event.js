import React, { Component } from 'react';
import DrawingModalOrganizer from '../components/drawing-modal-organizer'
import DrawingModalPair from '../components/drawing-modal-pair'
import DrawingModalGroup from '../components/drawing-modal-group'
import DrawingModalSequence from '../components/drawing-modal-sequence'
import Alert from '../components/alert'
import ResultsGroup from '../components/results-group'
import ResultsPair from '../components/results-pair'
import ResultsSequence from '../components/results-sequence'
import ParticipantsList from '../components/participants-list'

import { EVENT_TYPE_GROUP, EVENT_TYPE_RANDOM, EVENT_TYPE_SECRET_SANTA } from '../constants'
import { EVENT_STATUS_CLOSED, EVENT_STATUS_DRAWN, EVENT_STATUS_PENDING, EVENT_STATUS_REMOVED } from '../constants'
import { SORT_PRIORITY_GROUP, SORT_PRIORITY_INDIVIDUAL } from '../constants'
import { DRAWING_STATUS_ACTIVE, DRAWING_STATUS_HISTORICAL } from '../constants'

export default class Event extends Component {
  componentDidMount() {
    this.fullHeight()
		this.contentWayPoint()
  }

  render() {
    // Mock data
    const users = [
      { id: 1, name: 'Bruno Mars', thumbnail_url: 'http://keenthemes.com/assets/bootsnipp/img1-small.jpg' },
      { id: 2, name: 'Usher', thumbnail_url: 'http://keenthemes.com/assets/bootsnipp/img1-small.jpg' },
      { id: 3, name: 'Radiohead', thumbnail_url: 'http://keenthemes.com/assets/bootsnipp/img1-small.jpg' },
      { id: 4, name: 'Bruno Mars', thumbnail_url: 'http://keenthemes.com/assets/bootsnipp/img1-small.jpg' },
      { id: 5, name: 'Usher', thumbnail_url: 'http://keenthemes.com/assets/bootsnipp/img1-small.jpg' },
      { id: 6, name: 'Radiohead', thumbnail_url: 'http://keenthemes.com/assets/bootsnipp/img1-small.jpg' }
    ]
    const participants = [
      { id: 1, name: 'Bruno Mars', thumbnail_url: 'http://keenthemes.com/assets/bootsnipp/img1-small.jpg' },
      { id: 2, name: 'Usher', thumbnail_url: 'http://keenthemes.com/assets/bootsnipp/img1-small.jpg' },
      { id: 3, name: 'Radiohead', thumbnail_url: 'http://keenthemes.com/assets/bootsnipp/img1-small.jpg' },
      { id: 4, name: 'Bruno Mars', thumbnail_url: 'http://keenthemes.com/assets/bootsnipp/img1-small.jpg' },
      { id: 5, name: 'Usher', thumbnail_url: 'http://keenthemes.com/assets/bootsnipp/img1-small.jpg' },
      { id: 6, name: 'Radiohead', thumbnail_url: 'http://keenthemes.com/assets/bootsnipp/img1-small.jpg' }
    ]
    const highlightUsers = [1, 2]
    const title = 'General Assembly Hackathon'
    const description = 'This is a description of the app'
    const displayCode = '2478'
    const drawingTypeCode = EVENT_TYPE_GROUP
    const drawingStatusCode = EVENT_STATUS_PENDING
    const sortPriorityNum = 3;
    const admin = true
    const joined = true
    // end Mock data

    const drawn = (drawingStatusCode !== EVENT_STATUS_PENDING)

    let drawingModal = ''
    let drawButton = ''
    let results = ''

    if (admin && !drawn) {
      drawButton = <li><button className="btn btn-primary js-fh5co-draw-toggle js-fh5co-result-toggle">Draw</button></li>

      switch (drawingTypeCode) {
        case EVENT_TYPE_GROUP:
          drawingModal = (sortPriorityNum === 2) ? <DrawingModalPair results="" /> : <DrawingModalGroup size={ sortPriorityNum } results="" />
          break;
        case EVENT_TYPE_RANDOM:
          drawingModal = (
            <DrawingModalSequence results="" />
          )
          break;
        case EVENT_TYPE_SECRET_SANTA:
          break;
      }
    }

    switch (drawingTypeCode) {
      case EVENT_TYPE_GROUP:
        results = (sortPriorityNum === 2) ? <ResultsPair results="" /> : <ResultsGroup size={ sortPriorityNum } results="" />
        break;
      case EVENT_TYPE_RANDOM:
        results = <ResultsSequence results="" />

        break;
      case EVENT_TYPE_SECRET_SANTA:
        break;
    }

    const drawnButton = (admin && drawn) ?
      <li><button className="btn btn-secondary"><i className="fa fa-check-circle" aria-hidden="true" /> Drawn</button></li> :
      ''
    const joinButton = (!joined) ?
      <li><button className="btn btn-primary">Join</button></li> :
      ''
    const joinedButton = (joined) ?
      <li><button className="btn btn-secondary"><i className="fa fa-check-circle" aria-hidden="true" /> <span>Joined</span></button></li> :
      ''

    const buttons = (
      <ul>
        <li><a href="#"><i className="fa fa-user-plus menu-secondary" aria-hidden="true" /></a></li>
        { drawButton}
        { drawnButton }
        { joinButton }
        { joinedButton }
      </ul>
    )

    return (
      <div>
        { drawingModal }

        <Alert alertType="info" message={ `Go to <strong>randomize.co</strong> and use code <strong>${ displayCode }</strong> to join` } />

        <div id="fh5co-page">
          <header>
            <div className="container">
              <div className="fh5co-navbar-brand">
                <h1><a href="#"><img width="60" src="/i/logo-arrows.svg" /></a></h1>
                <div className="right-menu">
                  { buttons }
                </div>
              </div>
            </div>
          </header>

          <div id="main-section">
            <div className="container">
              <div className="col-xl-8 col-lg-8 col-md-8 nopadding">
                <div id="fh5co-intro-section">
                  <div className="container nopadding">
                    <div className="row">
                      <div className="col-md-8 animate-box">
                        <h2 className="intro-heading">{ title }</h2>
                        <p>{ description }</p>
                      </div>
                    </div>
                  </div>
                </div>

                { results }
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 participants-sidebar">
                <ParticipantsList users={ participants } highlightUsers={ highlightUsers } />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  fullHeight() {
    $('.js-fullheight').css('height', $(window).height())
    $(window).resize(function(){
      $('.js-fullheight').css('height', $(window).height())
    })
  }

  contentWayPoint() {
    let i = 0;

    $('.animate-box').waypoint(function(direction) {
      if (direction === 'down' && !$(this.element).hasClass('animated')) {
        i++
        $(this.element).addClass('item-animate')

        setTimeout(function() {
          $('body .animate-box.item-animate').each(function(k) {
            const el = $(this)

            setTimeout(function() {
              const effect = el.data('animate-effect')

              if (effect === 'fadeIn') {
                el.addClass('fadeIn animated')
              } else {
                el.addClass('fadeInUp animated')
              }

              el.removeClass('item-animate')
            }, k * 200, 'easeInOutExpo')
          })
        }, 100)
      }
    }, { offset: '85%' });
  }

}
