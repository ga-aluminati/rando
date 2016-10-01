import React, { Component } from 'React';

export default class Alert extends Component {
  componentDidMount() {
    const alert = $('.alert')

    alert.appendTo('.page-alerts')
    alert.slideDown()

    $('.page-alert .close').click(function(e) {
      e.preventDefault()
      $(this).closest('.page-alert').slideUp()
    })

    $('.clear-page-alerts').click(function(e) {
      e.preventDefault()
      $('.page-alert').slideUp()
    })
  }

  render() {
    const alertType = this.props.alertType || 'info'

    return (
      <div className="page-alerts">
        <div className={ `alert alert-${ alertType } page-alert text-center` }>
            <button type="button" className="close"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
            <div dangerouslySetInnerHTML={ { __html: this.props.message } } />
        </div>
      </div>
    )
  }
}
