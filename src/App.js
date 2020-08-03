import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {id:'nkbjfdsad', name: 'Max', age: 21},
      {id:'nihsaubd', name: 'Maniu', age: 22},
      {id:'bnhgjhkj', name: 'Stephanie', age: 71}
    ],
    otherState: 'Some other Value',
    showPersons: false
    
  });

 



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
  
  const deletePersonHandler = (personIndex) => {
    const doesShow = personsState.showPersons
    // const persons = personsState.persons.slice();
    const persons = [...personsState.persons];
    persons.splice(personIndex,1)
    setPersonsState({persons: persons,
      otherState: 'Some other Value',
      showPersons: doesShow
      
    })
  }
    let persons = null;

    if (personsState.showPersons) {
      persons = (
        <div>
          {personsState.persons.map((person, index) => {
            return <Person 
            click={() => deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            />
          })}
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
