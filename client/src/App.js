import React, { Component } from 'react';
import './App.css';
import Users from './components/UserProfile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = "/" component = {Users} />
        </div>
      </Router>
    );
  }
}

export default App;
