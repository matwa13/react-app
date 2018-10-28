import React, {Component} from 'react';
import styles from './App.css';
import Person from './Person'
import Input from './Input'
import Char from './Char'
import ErrorBoundary from './ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 30, info: 'Any info', id: 'skdjskd1' },
      { name: 'Maxim', age: 29, id: 'ldflkdlf2' }
    ],
    isVisible: false,
    inputVal: ''
  };

  handleClickBtn = () => {
    let oldVal = this.state.isVisible;
    this.setState({ isVisible: !oldVal });
  }

  deletePerson = (index) => {
    const persons = [ ...this.state.persons ];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }

  handleChange = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[ personIndex ] };
    person.name = event.target.value;
    const persons = [ ...this.state.persons ];
    persons[ personIndex ] = person;
    this.setState({ persons: persons });
  }

  changeInput = (event) => {
    this.setState({ inputVal: event.target.value });
  }

  handleClickChar = (index) => {
    let charArray = this.state.inputVal.split('');
    charArray.splice(index, 1);
    let newVal = charArray.join('');
    this.setState({ inputVal: newVal });
  }

  render() {
    let { persons, isVisible, inputVal } = { ...this.state };

    let personsList = null;
    let charsList = null;
    if (isVisible) {
      personsList = persons.map((person, index) => {
        return <ErrorBoundary key={person.id}>
          <Person name={person.name}
                  age={person.age}
                  changed={(event) => this.handleChange(event, person.id)}
                  clicked={() => this.deletePerson(index)}>{person.info}</Person>;
        </ErrorBoundary>
      });
    }
    if (inputVal.length) {
      charsList = inputVal.split('').map((char, index) => {
        return <Char value={char}
                     key={index}
                     clicked={() => this.handleClickChar(index)}/>
      })
    }

    const classes = [];

    if (persons.length <= 2) {
      classes.push(styles.red);
    }

    if (persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      <div className={styles.app}>
        <p className={classes.join(' ')}>Colored message</p>
        <button className={isVisible ? '' : styles.red}
                onClick={this.handleClickBtn}
        >Click
        </button>
        {personsList}
        <Input changed={(event) => this.changeInput(event)} value={inputVal}/>
        {charsList}
      </div>
    );
  }
}

export default App;