import React, { Component } from 'react';
import './guests.css';

class Guests extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id="guests-box">
        <div className="book age-group" id="adults">
          <span className="book age-left">Adults</span>
          <span className="book age-right">
            <button className="book circle minus">-</button>
            <span>{this.props.adults}</span>
            <button className="book circle plus">+</button>
          </span>
        </div>
        <div className="book age-group" id="children">
          <span className="book age-left">Children</span>
          <span className="book age-right">
            <button className="book circle minus">-</button>
            <span>{this.props.children}</span>
            <button className="book circle plus">+</button>
          </span>
        </div>
        <div className="book age-group" id="infants">
          <span className="book age-left">Infants</span>
          <span className="book age-right">
            <button className="book circle minus">-</button>
            <span>{this.props.infants}</span>
            <button className="book circle plus">+</button>
          </span>
        </div>
        <div id="max-guests">
          3 guests maximum. Infants don’t count toward the number of guests.
        </div>
        <div id="close">
          <span>Close</span>
        </div>
      </div>
    );
  }
}

export default Guests;