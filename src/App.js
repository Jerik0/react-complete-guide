import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' // <<< This needs to be UPPERCASE even though the Person.js is exported with lowercase.

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <Person />
        <Person />
        <Person />
      </div>
   // <div></div> <<< this is bad form, though loosely and technically allowed, we should only have one root element.
    );

    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, I'm a React App.")) <<< what the above JSX gets compiled to in JS. 
  }
}

export default App;