import React, { Component } from 'react';
import './App.css';
import FeedingForm from './components/FeedingForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Duck Watcher</h1>
        </header>
        <div className="container pt-4">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <FeedingForm />      
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
