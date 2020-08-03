import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 21},
      {name: 'Maniu', age: 22},
      {name: 'Stephanie', age: 71}
    ],
    otherState: 'Some other Value'
  });

  const switchNameHandler = (newName) => {
    // console.log("Was Clicked");
    setPersonsState({
      persons: [
        {name: 'Maximillion', age: 26},
        {name: newName, age: 22},
        {name: 'Stephanie', age: 21}
      ],
      
    })
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        {name: 'Maximillion', age: 26},
        {name: event.target.value, age: 22},
        {name: 'Stephanie', age: 21}
      ],
      
    })
  }


    return (

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button onClick={() => switchNameHandler("First off")}>Switch Name</button>
        <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
        <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        changed={nameChangedHandler}/>
        <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}
        click={switchNameHandler.bind(this, "myMymy")}>My Hobbies are as such:</Person>
      </div>
  
    );
    

}

export default App;

