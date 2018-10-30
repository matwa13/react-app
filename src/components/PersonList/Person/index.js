import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import withClass from '../../../hoc/withClass';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    this.focusInput();
  }

  focusInput() {
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  render () {
    let { name, children, age, clicked, changed } = { ...this.props };
    return (
      <>
        <AuthContext.Consumer>
          {auth => auth ? <p>Authorized</p> : <p>Non Authorized</p>}
        </AuthContext.Consumer>
        <p onClick={clicked}>I'm a {name}. My age is {age}</p>
        <p>{children}</p>
        <input type="text"
               ref={this.inputElement}
               onChange={changed}
               value={name}/>
      </>
    );
  }
}

Person.defaultProps = {
  age: 30,
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  clicked: PropTypes.func,
  changed: PropTypes.func,
};

export default withClass(Person, styles.person);
