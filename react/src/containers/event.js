import React, { Component } from 'react';

export default class Event extends Component {

  componentDidMount() {
    var alert = $('#alert-1')

    alert.appendTo('.page-alerts')
    alert.slideDown()

    $('.page-alert .close').click(function(e) {
      e.preventDefault()
      $(this).closest('.page-alert').slideUp()
    })

    $('.clear-page-alerts').click(function(e) {
      e.preventDefault()
      $('.page-alert').slideUp()
    });

    this.fullHeight();
		this.drawModal();
		this.resultModal();
		this.contentWayPoint();
  }

  fullHeight() {
    $('.js-fullheight').css('height', $(window).height())
    $(window).resize(function(){
      $('.js-fullheight').css('height', $(window).height())
    })
  }

  drawModal() {
    $('.js-fh5co-draw-toggle').on('click', function(e) {
      e.preventDefault()

      if ($('body').hasClass('draw-show')) {
        $('body').removeClass('draw-show')
        $('#fh5co-draw-window > .js-fh5co-draw-toggle').removeClass('show')
      } else {
        $('body').addClass('draw-show');
        setTimeout(function(){
          $('#fh5co-draw-window > .js-fh5co-draw-toggle').addClass('show')
        }, 900);
      }
    })
  }

  resultModal() {
    $('.js-fh5co-result-toggle').on('click', function(e) {
      e.preventDefault()

      if ($('body').hasClass('result-show')) {
        $('body').removeClass('result-show')
        $('#fh5co-result-window > .js-fh5co-result-toggle').removeClass('show')
      } else {
        $('body').addClass('result-show')
        setTimeout(function(){
          $('#fh5co-result-window > .js-fh5co-result-toggle').addClass('show')
        }, 900)
      }
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
            var el = $(this)

            setTimeout(function() {
              var effect = el.data('animate-effect')

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

  render() {
    return (
      <div>
        <section id="fh5co-draw-window">
          <a href="#" className="js-fh5co-draw-toggle fh5co-draw-toggle active"><i></i></a>
          <div className="js-fullheight fh5co-table">
            <div className="fh5co-table-cell js-fullheight">

              <h2>Drawing has taken place</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, ab delectus voluptates. Consequuntur officiis laboriosam placeat ut provident rem minima quibusdam error odio quia dolore, sit repellat maxime quos sequi.</p>

              <p></p>
              <p></p>
            </div>
          </div>
        </section>

        <section id="fh5co-result-window">
          <a href="#" className="js-fh5co-result-toggle fh5co-result-toggle active"><i></i></a>
          <div className="js-fullheight fh5co-table">
            <div className="fh5co-table-cell js-fullheight textcenter">

              <h2>You have been matched with <strong>Jane Doe</strong>!</h2>

              <div className="single-match">
                <div className="participants">
                  <div className="active item">
                    <div className="participant">
                      <img alt="" src="http://keenthemes.com/assets/bootsnipp/img1-small.jpg" className="pull-left" />
                      <div className="pull-left">
                        <span>Jane Doe</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2>Here is your group!</h2>

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

                <div className="active item">
                  <div className="participant">
                    <img alt="" src="http://keenthemes.com/assets/bootsnipp/img1-small.jpg" className="pull-left" />
                    <div className="pull-left">
                      <span>Lina Mars</span>
                    </div>
                  </div>
                </div>
              </div>

              <h2>Guess what? You are number <span className="placement">9</span>!</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, ab delectus voluptates. Consequuntur officiis laboriosam placeat ut provident rem minima quibusdam error odio quia dolore, sit repellat maxime quos sequi.</p>

            </div>
          </div>
        </section>

        <div className="page-alerts">
          <div className="alert alert-info page-alert text-center" id="alert-2">
              <button type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
              Go to <strong>randomize.co</strong> and use code <strong>2551</strong> to join
          </div>
          {/*
          <div className="alert alert-success page-alert" id="alert-1">
              <button type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
              <strong>Well done!</strong> You successfully read this important alert message.
          </div>
          <div className="alert alert-warning page-alert" id="alert-3">
              <button type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
              <strong>Warning!</strong> Best check yo self, you are not looking too good.
          </div>
          <div className="alert alert-danger page-alert" id="alert-4">
              <button type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </div>
          <div className="alert alert-success page-alert" id="alert-5">
              <button type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
              <strong>Cool!</strong> This alert will close in 3 seconds. The data-delay attribute is in milliseconds.
          </div>
          */}
        </div>

        <div id="fh5co-page">
          <header>
            <div className="container">
              <div className="fh5co-navbar-brand">
                <h1 className="text-center"><a href="index.html"><img width="60" src="/i/logo-arrows.svg" /></a></h1>
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
}
