import React from 'react';

const Char = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid'
  }
  return (
    <span style={style} onClick={props.clicked}>{props.value}</span>
  );
};

export default Char;
