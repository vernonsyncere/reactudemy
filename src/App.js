import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is working</p>
      <Person name='Max' age='28'/>
      <Person name='Manu' age='60'/>
      <Person name='Stephanie' age='21'>My Hobbies are as such:</Person>
      <Person name='Max' age='28'/>
    </div>

  );
}

export default App;
