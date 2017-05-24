import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.changeDeadline = this.changeDeadline.bind(this);

    this.state = {
      deadline: 'January 1, 2018',
    };
  }

  changeDeadline() {
    this.setState({
      deadline: 'January 5, 2018',
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">
          Countdown to {this.state.deadline}
        </div>
        <div>
          <div className="clock-days">14 days</div>
          <div className="clock-hours">30 hours</div>
          <div className="clock-minutes">15 minutes</div>
          <div className="clock-seconds">20 seconds</div>
        </div>
        <div>
          <input placeholder="new date" />
          <button onClick={this.changeDeadline}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
