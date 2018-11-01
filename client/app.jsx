import React, { Component } from 'react';
import './app.css';
import Calendar from './calendar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      guests: {
        adults: 1,
        children: 0,
        infants: 0
      },

    };
  }

  render() {
    return (
      <div className="App" id="outerBox">
        <div id="topBox">
          <div id="priceBox">
            <span id="price">60000G </span>
            <span id="perNight">per night</span>
          </div>
          <div id="starBox"></div>
        </div>
        <form>
          <div id="formFields">
            <label for="datesInput">Dates</label>
            <div id="datesInput">
              <div id="fromDate">
                <input type="text" placeholder="Check in"></input>
              </div>
              <div id="toDate">
                <input type="text" placeholder="Check out"></input>
              </div>
            </div>
            <label for="guestsInput">Guests</label>
            <div id="guestsInput"></div>
          </div>
          <div id="submitButton"></div>
        </form>
        You won't be charged yet
      </div>
    );
  }
}

export default App;
