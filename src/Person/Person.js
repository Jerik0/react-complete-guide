import React from 'react';

// In it's simplest form, a 'Component' is just a plain JavaScript function that returns some JSX. 
// ***NOTE: THIS IS KNOWN AS A STATELESS, OR DUMB COMPONENT. YOU CANNOT USE STATE WITH THIS***
const person = props => {
  return (
    <div>
      <p>I'm {props.name}, and I am {props.age} years old.</p>
      <p>{props.children}</p>
    </div>
    // onClick uses a CAPITAL C instead of lowercase because it is JSX.
  // props.children refers to ANYTHING between the opening and closing tag of the component (including complex JS).
  )
}

export default person; // <<< This needs to be lowercase because it matches the function name.