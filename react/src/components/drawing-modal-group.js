import React, { Component } from 'React'

export default class DrawingModalGroup extends Component {
  componentDidMount() {
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

  render() {
    return (
      <section id="fh5co-result-window">
        <a href="#" className="js-fh5co-result-toggle fh5co-result-toggle active"><i></i></a>
        <div className="js-fullheight fh5co-table">
          <div className="fh5co-table-cell js-fullheight textcenter">
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
          </div>
        </div>
      </section>
    )
  }
}
