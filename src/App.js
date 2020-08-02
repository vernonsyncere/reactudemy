import React, { Component} from 'react';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <h1>Hi, I'm a React App</h1>
    // </div>
    React.createElement('div', {className: 'App'}, React.createElement('h1',null,"Do I work?"))
  );
}

export default App;
