import React, { Component } from 'React'

export default class DrawingModalSequence extends Component {
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
            <h2>Guess what? You are number <span className="placement">9</span>!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, ab delectus voluptates. Consequuntur officiis laboriosam placeat ut provident rem minima quibusdam error odio quia dolore, sit repellat maxime quos sequi.</p>
          </div>
        </div>
      </section>
    )
  }
}
