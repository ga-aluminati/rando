import React, { Component } from 'react';
import DrawingModalOrganizer from '../components/drawing-modal-organizer'
import DrawingModalResultsSingle from '../components/drawing-modal-results-single'
import DrawingModalResultsGroup from '../components/drawing-modal-results-group'
import DrawingModalResultsSequence from '../components/drawing-modal-results-sequence'
import Alert from '../components/alert'
import UsersGridList from '../components/users-grid-list'
import ParticipantsList from '../components/participants-list'

export default class Event extends Component {
  componentDidMount() {
    this.fullHeight()
		this.contentWayPoint()
  }

  render() {
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

    return (
      <div>
        <DrawingModalOrganizer />

        {/*
          <DrawingModalResultsSingle />
          <DrawingModalResultsSequence />
        */}
        <DrawingModalResultsGroup />

        <Alert alertType="info" message="Go to <strong>randomize.co</strong> and use code <strong>2551</strong> to join" />

        <div id="fh5co-page">
          <header>
            <div className="container">
              <div className="fh5co-navbar-brand">
                <h1><a href="#"><img width="60" src="/i/logo-arrows.svg" /></a></h1>
                <div className="right-menu">
                  <ul>
                    <li><a href="#"><i className="fa fa-user-plus menu-secondary" aria-hidden="true" /></a></li>
                    <li><button className="btn btn-primary">Join</button></li>
                    <li><button className="btn btn-secondary"><i className="fa fa-check-circle" aria-hidden="true" /> <span>Joined</span></button></li>
                    <li><button className="btn btn-primary js-fh5co-draw-toggle">Draw</button></li>
                    <li><button className="btn btn-secondary js-fh5co-result-toggle"><i className="fa fa-check-circle" aria-hidden="true" /> Drawn</button></li>
                  </ul>
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

                <UsersGridList users={ users } />
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
