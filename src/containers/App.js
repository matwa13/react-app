import React, {Component} from 'react';
import styles from './App.css';
import PersonList from '../components/PersonList'
import Input from '../components/Input'
import Char from '../components/Char'
import Cockpit from '../components/Cockpit'
import withClass from '../hoc/withClass'

export const AuthContext = React.createContext(false);

class App extends Component {
  state = {
    persons: [
      { name: 'Max', info: 'Any info', id: '1' },
      { name: 'Maxim', age: 29, id: '2' },
      { name: 'Maximilian', age: 18, id: '3' },
    ],
    isVisible: false,
    inputVal: '',
    toggleClicked: 0,
    authenticated: false,
  };

  handleClickBtn = () => {
    this.setState((prevState, props) => {
      return {
        isVisible: !prevState.isVisible,
        toggleClicked: prevState.toggleClicked + 1,
      }
    });
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

  loginHandler = () => {
    this.setState((prevState) => {
      return {
        authenticated: !prevState.authenticated
      }
    });
  }

  render() {
    let { persons, isVisible, inputVal, authenticated } = { ...this.state };

    let personsList = null;
    let charsList = null;
    if (isVisible) {
      personsList = <PersonList persons={persons}
                                changed={this.handleChange}
                                clicked={this.deletePerson}/>
    }

    if (inputVal.length) {
      charsList = inputVal.split('').map((char, index) => {
        return <Char value={char}
                     key={index}
                     clicked={() => this.handleClickChar(index)}/>
      })
    }

    return (
      <>
        <AuthContext.Provider value={authenticated}>
          <Cockpit persons={persons}
                   isVisible={isVisible}
                   appTitle={this.props.title}
                   login={this.loginHandler}
                   clicked={this.handleClickBtn}/>
          {personsList}
        </AuthContext.Provider>
        <Input changed={(event) => this.changeInput(event)} value={inputVal}/>
        {charsList}
      </>
    );
  }
}

export default withClass(App, styles.app);
