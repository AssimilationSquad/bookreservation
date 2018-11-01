import React, { Component } from 'react';
import './guests.css';

class Guests extends Component {
  constructor(props) {
    super(props);
    // <div className="inline"><button className="minus"></button></div>
    // <div className="inline">1</div>
    // <div className="inline"><button className="plus"></button></div>
  }

  render() {
    return (
      <div id="guests-box">
        <div className="age-group" id="adults">
          <span className="age-left">Adults</span>
          <span className="age-right">
            <button className="minus">-</button>
            <span>1</span>
            <button className="plus">+</button>
          </span>
        </div>
        <div className="age-group" id="children">
          <span className="age-left">Children</span>
          <span className="age-right">
            <button className="minus">-</button>
            <span>0</span>
            <button className="plus">+</button>
          </span>
        </div>
        <div className="age-group" id="infants">
          <span className="age-left">Infants</span>
          <span className="age-right">
            <button className="circle minus">-</button>
            <span>0</span>
            <button className="circle plus">+</button>
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