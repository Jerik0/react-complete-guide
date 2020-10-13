import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' // <<< This needs to be UPPERCASE even though the Person.js is exported with lowercase.

class App extends Component {
  //if state changes, it will re-render the DOM automatically.
  state = {
    people:  [
      { name: "Jonathan", age: 34 },
      { name: "Shelby", age: 28 },
      { name: "Mike", age: 32 },
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>My Hobbies: Vanderpump Rules</Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age} />
      </div>
   // <div></div> <<< this is bad form, though loosely and technically allowed, we should only have one root element.
    );

    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, I'm a React App.")) <<< what the above JSX gets compiled to in JS. 
  }
}

export default App;