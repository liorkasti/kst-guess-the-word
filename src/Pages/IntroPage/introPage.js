import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../../Components/Button';

import './introPage.css';

const IntroPage = () => {
  const history = useHistory();
  const { maxScore } = useSelector((state) => state);

  const handlePlayButton = () => {
    history.push('/game-play-page');
  };

  const handleScoreTableButton = () => {
    history.push('/scoresheet-page');
  };

  return (
    <div className="intro-page-wrapper">
      <h1 className="title">Welcome To Guess The Word Game</h1>
      <div className="intro-page-buttons">
        <Button
          text="Play!"
          width="25vw"
          height="2.8em"
          handleButton={handlePlayButton}
        />
        <Button
          text="Table scores"
          width="25vw"
          height="2.8em"
          handleButton={handleScoreTableButton}
        />
      </div>
      <lable className="lable">Your Maximum Score: {maxScore}</lable>
    </div>
  );
};

export default IntroPage;
