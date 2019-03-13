import React, { Component } from 'react';
import './App.css';
import CardsList from '../components/CardsList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <CardsList/>
      </div>
    );
  }
}

export default App;
