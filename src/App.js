import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Tarragona. es',
  'Ibiza, es',
  'A Coruña, es',
  'Cabo de gata, es',
  'Madrid, es',
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList  cities={cities}/>
      </div>
    );
  }
}

export default App;
