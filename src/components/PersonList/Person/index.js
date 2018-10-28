import React from 'react';
import styles from './style.css';

const Person = (props) => {
  let { name, children, age, clicked, changed } = { ...props };
  return (
    <div className={styles.person}>
      <p onClick={clicked}>I'm a {name}. My age is {age}</p>
      <p>{children}</p>
      <input type="text"
             onChange={changed}
             value={name}/>
    </div>
  );
};

export default Person;
