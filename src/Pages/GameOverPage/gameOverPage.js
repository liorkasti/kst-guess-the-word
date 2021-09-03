import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { addUser } from '../../redux/actions/actions';
import store from '../../redux/store';

import './gameOverPage.css';

const GameOverPage = () => {
  const history = useHistory();

  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputName = ({ target }) => {
    setUserName(target.value);
  };

  const handleInputPhone = ({ target }) => {
    const phone = Number(target.value);
    setUserPhone(phone);
  };

  const handleGameOverButton = () => {
    setIsValid(true);
    if (userName.length > 1 && userPhone !== '') {
      store.dispatch(addUser(userName, userPhone));
      history.push('/');
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="game-over-wrapper">
      <h2>
        Plese enter your name and phone number:
      </h2>
      <div className="game-over-inputs">
        <Input placeholderText="Your name" handleUserInput={handleInputName} />
        <Input placeholderText="Your phone" handleUserInput={handleInputPhone} />
      </div>
      {!isValid ? (
        <h5 style={{ color: 'rgba(255, 80, 80, 0.8)' }}>
          Name must be at least 2 chars and phone number is required !
        </h5>
      ) : (
        ''
      )}
      <div className="game-over-button">
        <Button
          text="Intro Page"
          width="25vw"
          height="2.8em"
          handleButton={handleGameOverButton}
        />
      </div>
    </div>
  );
};

export default GameOverPage;
