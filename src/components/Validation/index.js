import React from 'react';

const Validation = (props) => {
  let {length} = {...props};
  let msg = null;
  if (length < 5) {
    msg = 'Too short'
  } else if (length > 7) {
    msg = 'Too long'
  }
  return (
    <p>{msg}</p>
  );
};

export default Validation;
