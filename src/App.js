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
    ],
    otherState: 'some other value'
  }

  // 'handler' is used to show that you are not calling this function but that it is used to handle events.
  switchNameHandler = () => {
    // console.log('was clicked');
    // this.state.people[0].name = 'Jon';  <<< DO NOT DO THIS, React will not recognize state change like this.
    this.setState({
      people: [
        { name: "Jonathan", age: 34 },
        { name: "Shelby", age: 28 },
        { name: "Mike", age: 33 },
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>My Hobbies: Vanderpump Rules</Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age} />
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
   // <div></div> <<< this is bad form, though loosely and technically allowed, we should only have one root element.
    );

    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, I'm a React App.")) <<< what the above JSX gets compiled to in JS. 
  }
}

export default App;