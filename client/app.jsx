import React, { Component } from 'react';
import './app.css';
import Calendar from './calendar.jsx';
import Guests from './guests.jsx';

// let serverUrl = 'http://127.0.0.1:3001';

class App extends Component {
  constructor(props) {
    super(props);
    let path = window.location.pathname;

    this.state = {
      roomId: path[path.length - 1],
      // year: 2018,
      // month: 11,
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      fromDate: undefined,
      toDate: undefined,
      guests: {
        adults: 1,
        children: 0,
        infants: 0
      },
      renderedOverlay: '',
      price: {
        basePrice: 31500,
        cityTax: 2000,
        cleaningFee: 2500,
        serviceFee: 0,
        longStayDiscount: 0,
        minStay: 1,
        calendar: []
      }

    };

    // this.renderCalendar = this.renderCalendar.bind(this);
    // this.renderGuests = this.renderGuests.bind(this);
    this.changeOverlay = this.changeOverlay.bind(this);
    this.callApi = this.callApi.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
  }

  componentDidMount() {
    this.callApi();
  }

  callApi() {
    let url = `/price/${this.state.roomId}`;
    if (this.state.fromDate && this.state.toDate) {
      url += `?fromDate=${this.state.fromDate}&toDate=${this.state.toDate}`;
    } else if (this.state.fromDate) {
      url += `?fromDate=${this.state.fromDate}`;
    }
    
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((price) => {
        this.setState({price});
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getPerNightPrice() {
    // gets the average of (base price + per person fee + dayPriceModifier)
    let price = this.state.price.basePrice;

    return price;
  }

  changeOverlay(overlay) {
    this.setState({
      renderedOverlay: overlay
    });
  }

  changeMonth(year, month) {
    this.setState({year, month});
    console.log(this.state);
  }

  renderCalendar() {
    return this.state.renderedOverlay === 'calendar' ? 
      <Calendar 
        year={this.state.year} 
        month={this.state.month}
        handleMonthChange={this.changeMonth}
      /> : null;
  }

  renderGuests() {
    return this.state.renderedOverlay === 'guests' ? <Guests {...this.state.guests} /> : null;
  }

  render() {
    return (
      <div className="book" id="outerBox">
        <div id="topBox" onClick={() => { this.changeOverlay(''); }} >
          <div id="priceBox">
            <span id="price">{this.getPerNightPrice()} G </span>
            <span id="perNight">per night</span>
          </div>
          <div id="starBox"></div>
        </div>

        <form>
          <div id="formFields">
            <label id="formLabel" htmlFor="datesInput">Dates</label>
            
            <div id="datesInput">
              <div id="fromDate">
                <input className="book " type="text" onClick={() => { this.changeOverlay('calendar'); }} placeholder="Check in"></input>
              </div>
              <div id="toDate">
                <input className="book " type="text" onClick={() => { this.changeOverlay('calendar'); }} placeholder="Check out"></input>
              </div>
            </div>
            {this.renderCalendar()}

            <label id="formLabel" htmlFor="guestsInput">Guests</label>
            <div id="guestsInput">
              <input className="book " id="guests-input" readOnly type="text" value="1 Guest" onClick={() => { this.changeOverlay('guests'); }}></input>
            </div>
            {this.renderGuests()}
            
          </div>
          <div id="submitButton">
            <button id="book">Request to Book</button>
          </div>
        </form>

        You won't be charged yet
      </div>
    );
  }
}

export default App;
