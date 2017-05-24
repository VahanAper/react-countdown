import React, { Component } from 'react';

import './App.css';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);

    this.changeDeadline = this.changeDeadline.bind(this);
    this.setDeadline = this.setDeadline.bind(this);

    this.state = {
      deadline: 'January 1, 2018',
      newDeadline: '',
    };
  }

  setDeadline(event) {
    this.setState({
      newDeadline: event.target.value,
    });
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline,
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock deadline={this.state.deadline} />
        <div>
          <input onChange={this.setDeadline} placeholder="new date" />
          <button onClick={this.changeDeadline}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
