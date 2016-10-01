import React, { Component } from 'React'

export default class DrawingModalOrganizer extends Component {
  componentDidMount() {
    $('.js-fh5co-draw-toggle').on('click', function(e) {
      e.preventDefault()

      if ($('body').hasClass('draw-show')) {
        $('body').removeClass('draw-show')
        $('#fh5co-draw-window > .js-fh5co-draw-toggle').removeClass('show')
      } else {
        $('body').addClass('draw-show');
        setTimeout(function() {
          $('#fh5co-draw-window > .js-fh5co-draw-toggle').addClass('show')
        }, 900);
      }
    })
  }

  render() {
    return (
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
    )
  }
}
