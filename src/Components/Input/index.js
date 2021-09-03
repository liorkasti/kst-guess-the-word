import React from 'react';

import './index.css';

const Input = ({ userInput, handleUserInput: handleInput, placeholderText }) => {
  return (
    <input
      value={userInput}
      onChange={handleInput}
      className="input"
      placeholder={placeholderText}
    />
  );
};

export default Input;
