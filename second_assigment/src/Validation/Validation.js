import React from 'react';

const validation = (props) => {
  return (

    <div>
    {
      props.inputLength > 5?
      <p>Text to Long </p>:
      <p>Text to short</p>
}
    </div>
  )
};

export default validation;
