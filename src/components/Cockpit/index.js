import React from 'react';
import styles from './style.css'
import { AuthContext } from '../../containers/App';

const Cockpit = (props) => {
  const classes = [];

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }

  if (props.persons.length <= 1) {
    classes.push(styles.italic);
  }

  return (
    <>
      <h1 className={classes.join(' ')}>{props.appTitle}</h1>
      <button className={`${styles.button} ${props.isVisible ? '' : styles.red}`}
              onClick={props.clicked}
      >Click
      </button>
      <AuthContext.Consumer>
        {auth => <button onClick={props.login}>{auth ? 'Log Out' : 'Log In'}</button>}
      </AuthContext.Consumer>
    </>
  );
};

export default Cockpit;
