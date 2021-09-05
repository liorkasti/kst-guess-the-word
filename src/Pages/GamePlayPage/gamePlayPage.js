import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CountdownCircleTimer as Countdown } from "react-countdown-circle-timer";
import randomWords from 'random-words';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import './gamePlayPage.css';

import {
  riseLevel
  , initLife
  , initScore
  , decrementLife
  , updateScore
  , userMaxScore
} from '../../redux/actions/actions';
import store from '../../redux/store';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      {/* <div style={{fontSize: '8px'}}>remaining</div> */}
      <div className="value">{remainingTime}</div>
    </div>
  );
};
const GamePlayPage = () => {
  const [maskedWord, setMaskedWord] = useState('');
  const [level, setLevel] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [placeholder, setPlaceholder] = useState('_');
  const [randomWord, setRandomWord] = useState('');
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [GameOver, setGameOver] = useState(false);

  const startDate = React.useRef(Date.now());

  const history = useHistory();
  const state = useSelector((state) => state);
  const { life, score } = useSelector((state) => state);

  // console.log('level: ' + level);

  useEffect(() => {
    generateWord(level);
  }, []);

  const generateWord = (difficulty) => {
    const word = randomWords({ exactly: 1, maxLength: difficulty + 2 });
    console.log(`%c random words: ${word[0]}`, 'background: #222; color: #bada55');
    setRandomWord(word[0]);
    generateMask(word[0]);
    HandlePlaceholder(maskedWord.length);
  };

  const generateMask = (randomW) => {
    let word = randomW;
    for (let index = 0; index < randomW.length; index++) {
      const i = Math.floor(Math.random() * word.length);
      word = word.substring(0, i) + '_ ' + word.substring(i + 1);
      if (index === 0 || randomW.length - 1 !== index) {
        // console.log('WORD: ', word);
        setMaskedWord(word);
      }
    }
  };

  const HandleInput = (event) => {
    setUserInput(event.target.value);
  };

  const HandlePlaceholder = (length) => {
    setPlaceholder('_')
    if (length > randomWord.length) { length = randomWord.length; }
    for (let index = 0; index < length + 1; index++) {
      setPlaceholder(placeholder + ' _')
    }
  };

  const handleCheckGuess = () => {
    setWrongAnswer(false);
    // Checks guess.
    if (userInput === randomWord) {
      startDate.current = Date.now();
      store.dispatch(riseLevel);
      store.dispatch(updateScore(10 * (level + 1)));
      setLevel(level + 1);
      generateWord(level + 1);
      setUserInput('');
    } else {
      setWrongAnswer(true);
      if (life === 1) {
        console.log('loose');
        setGameOver(true);
      }
      store.dispatch(decrementLife);
    }
  };

  const handleGameOver = () => {
    store.dispatch(initScore);
    store.dispatch(initLife);
    store.dispatch(userMaxScore(score));
    history.push('/game-over-page');
  };

  const onCountdownOver = () => {
    setGameOver(true);
  };

  return (
    <div className="game-play-wrapper">
      {!GameOver
        ?
        <div className="game-play">
          <div className="timer-wrapper">
            <Countdown
              isPlaying
              size={60}
              strokeWidth={4}
              duration={30}
              onComplete={onCountdownOver}
              initialRemainingTime={30}
              colors="#FF5050"
            >
              {renderTime}
            </Countdown>
          </div>
          <h1 className="title">Complete the word: </h1>

          <h2 className="masked">{maskedWord}</h2>

          <div>
            <Input userInput={userInput} placeholderText={placeholder} handleUserInput={HandleInput} />
            <Button
              handleButton={handleCheckGuess}
              text="Check Guess >"
              width="25vw"
              height="2.8em"
            />
          </div>
          {wrongAnswer ?
            <h4 style={{ color: 'rgba(255, 80, 80, 1)', marginBottom: '1.5em' }}>{wrongAnswer}Wrong guess! try something else! </h4>
            :
            ''
          }
          <div>
            <label className="label">Guesses left: {life}</label>
            <label className="label">Level: {level + 1}</label>
            <label className="label">Scor: {score}</label>
          </div>
        </div>
        :
        <div>
          <h1 className="title">The word was: {randomWord}</h1>
          <h2><label className="label">Your score: {score} </label></h2>
          <Button
            text="Game Over!"
            width="25vw"
            height="2.8em"
            handleButton={handleGameOver}
          />
        </div>
      }
    </div>
  );
};

export default GamePlayPage;
