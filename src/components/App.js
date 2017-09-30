import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Files from './files';

class App extends Component {
  render() {
    return (
      <div class="row">
        <div class="one-half column">
          <Files></Files>
        </div>
        <div class="one-half column">
          <h1> Hello </h1>
        </div>
      </div>
    );
  }
}

export default App;
