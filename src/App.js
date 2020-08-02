import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is working</p>
      <Person/>
      <Person/>
      <Person/>
      <Person/>
    </div>

  );
}

export default App;
