import React, { Component } from 'react';
import './calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.month = 9;
    this.year = 2018;
    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    this.header = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    this.state = {
      matrix: [ [ null, 1, 2, 3, 4, 5, 6 ],
        [ 7, 8, 9, 10, 11, 12, 13 ],
        [ 14, 15, 16, 17, 18, 19, 20 ],
        [ 21, 22, 23, 24, 25, 26, 27 ],
        [ 28, 29, 30, 31 ] ]
    };

    this.renderCal = this.renderCal.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderSquare = this.renderSquare.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderMonthYear = this.renderMonthYear.bind(this);
  }

  renderMonthYear() {
    return (
      <div id="monthYear">
        <strong>
          {this.monthNames[this.month] + ' ' + this.year}
        </strong>
      </div>
    );
  }

  renderHeader(header) {
    return (
      <thead>
        <tr>
          {header.map((day) => {
            return <th>{day}</th>;
          })}
        </tr>
      </thead>
    );
  }

  renderCal(matrix) {
    return (
      <tbody>
        {matrix.map(this.renderRow)}
      </tbody>
    );
  }

  renderRow(row) {
    return (
      <tr>
        {row.map(this.renderSquare)}
      </tr>
    );
  }

  renderSquare(date) {
    return (
      <td>
        {date}
      </td>
    );
  }

  render() {
    return (
      <div id="calWrapper">
        <div id="calTop">
          <button className="change-month" id="left">L</button>
          {this.renderMonthYear()}
          <button className="change-month" id="right">R</button>
        </div>
        
        <table id="calendar">
          {this.renderHeader(this.header)}
          {this.renderCal(this.state.matrix)}
        </table>
      </div>
    );
  }
}

export default Calendar;