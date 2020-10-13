import React from 'react';

// In it's simplest form, a 'Component' is just a plain JavaScript function that returns some JSX. 
// ***NOTE: THIS IS KNOWN AS A STATELESS, OR DUMB COMPONENT. YOU CANNOT USE STATE WITH THIS***
const person = () => {

  return (
    <p>I'm a Person, and I am {Math.floor(Math.random() * 30)} years old.</p>
  )

}

export default person; // <<< This needs to be lowercase because it matches the function name.