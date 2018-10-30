import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Fib from './Fib';
import OtherPage from './OtherPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/other">Other</Link>
          <Route exact path="/" component={Fib} />
          <Route exact path="/other" component={OtherPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
