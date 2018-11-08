import React, { Component } from 'react';
import './calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    this.header = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    this.renderCal = this.renderCal.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderSquare = this.renderSquare.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderMonthYear = this.renderMonthYear.bind(this);
    this.makeMatrix = this.makeMatrix.bind(this);

    this.state = {
      matrix: [ [ null, 1, 2, 3, 4, 5, 6 ],
        [ 7, 8, 9, 10, 11, 12, 13 ],
        [ 14, 15, 16, 17, 18, 19, 20 ],
        [ 21, 22, 23, 24, 25, 26, 27 ],
        [ 28, 29, 30, 31 ] ]
    };

    
  }

  componentDidMount() {
    this.setState({
      matrix: this.makeMatrix()
    });
  }

  makeMatrix() {
    let firstDate = new Date(this.props.year, this.props.month);
    let dayOfStart = firstDate.getDay();
    let dateOfEnd = new Date(this.props.year, this.props.month + 1, 0).getDate();
    let flatCal = [];

    for (let i = 0; i < dayOfStart; i++) {
      flatCal.push(null);
    }

    for (let i = 1; i <= dateOfEnd; i++) {
      flatCal.push(i);
    }

    let matrixize = function (flatArray, numOfCols) {
      return flatArray.reduce((acc, el, index) => {
        if (index % numOfCols === 0) {
          acc.push([el]);
        } else {
          acc[acc.length - 1].push(el);
        }
        return acc;
      }, []);
    };

    return matrixize(flatCal, 7);
  }

  renderMonthYear() {
    return (
      <div id="monthYear">
        <strong className="book ">
          {this.monthNames[this.props.month] + ' ' + this.props.year}
        </strong>
      </div>
    );
  }

  renderHeader(header) {
    return (
      <thead>
        <tr>
          {header.map((day, index) => {
            return <th key={index}>{day}</th>;
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

  renderRow(row, index) {
    return (
      <tr key={index}>
        {row.map(this.renderSquare)}
      </tr>
    );
  }

  renderSquare(date, index) {
    return (
      <td key={index}>
        {date}
      </td>
    );
  }

  render() {
    return (
      <div id="calWrapper">
        <div id="calTop">
          <button 
            className="book change-month" 
            onClick={(e) => {
              e.preventDefault();
              this.props.handleMonthChange(this.props.year, this.props.month - 1);
            }} 
            id="left">
            L
          </button>
          {this.renderMonthYear()}
          <button 
            className="book change-month" 
            onClick={(e) => { 
              e.preventDefault();
              this.props.handleMonthChange(this.props.year, this.props.month + 1); 
            }} 
            id="right">
            R
          </button>
        </div>
        
        <table id="calendar">
          {this.renderHeader(this.header)}
          {this.renderCal(this.makeMatrix())}
        </table>
      </div>
    );
  }
}

export default Calendar;