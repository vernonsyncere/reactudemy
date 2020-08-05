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

 



  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    })
   

    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;
    const doesShow = personsState.showPersons;
    setPersonsState({ persons: persons, otherState: 'Some other Value',showPersons: doesShow  });
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

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover':{
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  }
    let persons = null;

    if (personsState.showPersons) {
      persons = (
        <div>
          {personsState.persons.map((person, index) => {
            return <Person 
            key={person.id}
            click={() => deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            
            changed={(event) => nameChangedHandler(event, person.id)}
            />
          })}
          </div> 
      );

      style.backgroundColor='red';
      style[':hover']= {
        backgroundColor: 'salmon',
      color: 'black'
      }
    }

    let classes = [];
    if (personsState.persons.length <=2){
      classes.push('red');

    }
    if  (personsState.persons.length <=1){
      classes.push('bold')
    }
    

    return (
      
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is working</p>
        <button 
        style ={style}
        onClick={togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
     
  
    );
    

}

export default App;
