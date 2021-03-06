import {
  RISE_LEVEL
  , COUNTDOWN_OVER
  , INIT_LIFE
  , INIT_SCORE
  , DECREMENT_LIFE
  , UPDATE_SCORE
  , USER_MAX_SCORE
  , ADD_USER
} from './types';

export const riseLevel = {
  type: RISE_LEVEL,
  payload: 'riseLevel',
};

export const initLife = {
  type: INIT_LIFE,
  payload: 'initLife',
};

export const initScore = {
  type: INIT_SCORE,
  payload: 'initScore',
};

export const decrementLife = {
  type: DECREMENT_LIFE,
  payload: 'decrementLife',
};

export const updateScore = (number) => {
  return {
    type: UPDATE_SCORE,
    payload: number,
  };
};

export const userMaxScore = (userScore) => {
  return {
    type: USER_MAX_SCORE,
    payload: userScore,
  };
};

export const addUser = (userName, userPhone) => {
  return {
    type: ADD_USER,
    payload: {
      userName,
      userPhone,
    },
  };
};

// export const countdownOver = () => {
//   return {
//     type: COUNTDOWN_OVER,
//     payload: 'countdownOver',
//   };
// };
