import React from 'react';
import ErrorBoundary from '../ErrorBoundary'
import Person from './Person'

const PersonList = (props) => {
  return props.persons.map((person, index) => {
    return <ErrorBoundary key={person.id}>
      <Person name={person.name}
              age={person.age}
              changed={(event) => props.changed(event, person.id)}
              clicked={() => props.clicked(index)}>{person.info}</Person>;
    </ErrorBoundary>
  });
}

export default PersonList;
