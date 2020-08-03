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
    otherState: 'Some other Value',
    showPersons: false
    
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

  const togglePersonHandler = () => {
    const doesShow = personsState.showPersons;
    console.log(doesShow)
    setPersonsState({
      persons: [
        {name: 'Max', age: 21},
        {name: 'Maniu', age: 22},
        {name: 'Stephanie', age: 71}
      ],
      otherState: 'Some other Value',
      showPersons: !doesShow
    });
    console.log(personsState.showPersons);
  }
    let persons = null;

    if (personsState.showPersons) {
      persons = (
        <div>
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

    return (

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button onClick={togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
  
    );
    

}

export default App;
