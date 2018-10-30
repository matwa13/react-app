import React, {Component} from 'react';
import ErrorBoundary from '../ErrorBoundary'
import Person from './Person'

class PersonList extends Component {
  render() {
    const { persons, changed, clicked } = { ...this.props };

    return persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person name={person.name}
                  age={person.age}
                  position={index}
                  changed={(event) => changed(event, person.id)}
                  clicked={() => clicked(index)}>{person.info}</Person>
        </ErrorBoundary>
      );
    });
  }
}

export default PersonList;
