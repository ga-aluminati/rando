import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
      <div className="container-fluid display-table">
          <div className="row display-table-row">
              <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                  <div className="logo">
                      <a href="dashboard.html"><img width="60" src="/i/logo-arrows.svg" /></a>
                  </div>
                  <div className="navi">
                      <ul>
                          <li className="active"><a href="#"><i className="fa fa-calendar-check-o" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Upcoming</span></a></li>
                          <li><a href="#"><i className="fa fa-users" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Participated</span></a></li>
                          <li><a href="#"><i className="fa fa-pencil-square-o" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Organized</span></a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-md-10 col-sm-11 display-table-cell v-align">
                  <div className="row">
                      <header>
                          <div className="col-md-7">
                              <nav className="navbar-default pull-left">
                                  <div className="navbar-header">
                                      <button type="button" className="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#side-menu" aria-expanded="false">
                                          <span className="sr-only">Toggle navigation</span>
                                          <span className="icon-bar"></span>
                                          <span className="icon-bar"></span>
                                          <span className="icon-bar"></span>
                                      </button>
                                  </div>
                              </nav>
                          </div>
                          <div className="col-md-5">
                              <div className="header-rightside">
                                  <ul className="list-inline header-top pull-right">
                                      <li className="hidden-xs"><a href="#" className="add-event btn btn-primary" data-toggle="modal" data-target="#add_event">Add Event</a></li>
                                      <li className="dropdown">
                                          <a href="#" className="dropdown-toggle" data-toggle="dropdown"><img alt="" src="http://keenthemes.com/assets/bootsnipp/img1-small.jpg" />
                                          <b className="caret"></b></a>
                                          <ul className="dropdown-menu">
                                              <li>
                                                  <div className="navbar-content">
                                                      <span>Jane Doe</span>
                                                      <p className="text-muted small">
                                                          jane@doe.com
                                                      </p>
                                                      <div className="divider">
                                                      </div>
                                                      <a href="#" className=" btn btn-secondary active">View Profile</a>
                                                  </div>
                                              </li>
                                          </ul>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </header>
                  </div>
                  <div className="user-dashboard">
                      <h1>Upcoming</h1>
                      <div className="row">
                          <div className="gutter">

                          <div className="container">
                              <table className="table table-responsive table-hover">

                                <thead>
                                  <tr>
                                    <th>Event</th>
                                    <th>Participants</th>
                                    <th>Deadline</th>
                                  </tr>
                                </thead>

                                <tbody>
                                  <tr>
                                    <td><a href="#">AngelHack 2016</a></td>
                                    <td>11</td>
                                    <td>08/11/2016 3 pm</td>
                                  </tr>
                                  <tr>
                                    <td><a href="#">GA Hackathon</a></td>
                                    <td>24</td>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td><a href="#">Secret Santa Funtime!</a></td>
                                    <td>3</td>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                          </div>

                          </div>
                          <div className="col-md-7 col-sm-7 col-xs-12 gutter">


                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div id="add_event" className="modal fade" role="dialog">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header login-header">
                      <button type="button" className="close" data-dismiss="modal">×</button>
                      <h4 className="modal-title">Add Event</h4>
                  </div>
                  <div className="modal-body">
                      <input type="text" placeholder="Event Name" name="name" />
                      <textarea name="description" placeholder="Description"></textarea>
                      <select className="form-control" name="">
                        <option value="">Order</option>
                        <option value="">Group</option>
                      </select>
                      <select className="form-control" name="">
                        <option value="">Number of users per group:</option>
                        <option value="">Number of groups:</option>
                      </select>
                      <input type="text" placeholder="" name="name" />
                  </div>
                  <div className="modal-footer">
                    <a href="#" data-dismiss="modal">Close</a>
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Save</button>
                  </div>
              </div>
          </div>
      </div>
      </div>
    )
  }
}
