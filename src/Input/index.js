import React from 'react';
import Validation from '../Validation'

const Input = (props) => {
  let {value, changed} = {...props};
  return (
    <div className="input">
      <input type="text"
             onChange={changed}
             value={value}/>
      <p>Length: {value.length}</p>
      <Validation length={value.length}/>
    </div>
  );
};

export default Input;
