import React, { Component } from 'react';
import NavBar from './navigation/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="app">
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
