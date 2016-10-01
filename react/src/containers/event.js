import React, { Component } from 'react';
import DrawingModalOrganizer from '../components/drawing-modal-organizer'
import DrawingModalResultsSingle from '../components/drawing-modal-results-single'
import DrawingModalResultsGroup from '../components/drawing-modal-results-group'
import DrawingModalResultsSequence from '../components/drawing-modal-results-sequence'
import Alert from '../components/alert'

export default class Event extends Component {
  componentDidMount() {
    this.fullHeight()
		this.contentWayPoint()
  }

  render() {
    return (
      <div>
        <DrawingModalOrganizer />

        {/* <DrawingModalResultsSingle /> */}
        <DrawingModalResultsGroup />
        {/* <DrawingModalResultsSequence /> */}

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
                        <h2 className="intro-heading">General Assembly Hackathon</h2>
                        <p>This is a description of the app</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="fh5co-photos-section">
                    <div id="ri-grid" className="ri-grid ri-grid-size-2">
                      <img className="ri-loading-image" src="images/loading.gif"/>
                      <ul>
                        <li>
                          <a href="#">
                            <img src="images/pic1.jpg"/>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="images/pic2.jpg"/>
                          </a>
                        </li>

                      </ul>
                    </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 participants-sidebar">
                <div className="participants-header">17 participants</div>

                  <div className="row">
                    <div className="participants">
                      <div className="active item">
                        <div className="participant">
                          <img alt="" src="http://keenthemes.com/assets/bootsnipp/img1-small.jpg" className="pull-left" />
                          <div className="pull-left">
                            <span>Lina Mars</span>
                          </div>
                        </div>
                      </div>
                      <div className="active item">
                        <div className="participant">
                          <img alt="" src="http://keenthemes.com/assets/bootsnipp/img1-small.jpg" className="pull-left" />
                          <div className="pull-left">
                            <span>Lina Mars</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="participant">
                          <img alt="" src="http://keenthemes.com/assets/bootsnipp/img1-small.jpg" className="pull-left" />
                          <div className="pull-left">
                            <span>Lina Mars</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="participant">
                          <img alt="" src="http://keenthemes.com/assets/bootsnipp/img1-small.jpg" className="pull-left" />
                          <div className="pull-left">
                            <span>Lina Mars</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
    var i = 0;

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
