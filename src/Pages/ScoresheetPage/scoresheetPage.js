import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../../Components/Button';

import './scoresheetPage.css';

const ScoresheetPage = () => {
  const history = useHistory();
  const { users } = useSelector((state) => state);

  const handleGameOver = () => {
    history.push('/');
  };

  return (
    <div >
      <table class="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Phone number</th>
            <th>Score</th>
          </tr>
        </thead>
        {users.map((user, index) => (
          <tbody>
            <tr>
              <td>{index+1}</td>
              <td>{user.userName}</td>
              {user.userPhone
                ?
                <td>{user.userPhone}</td>
                :
                <td>-</td>
              }
              <td>{user.userMaxScore} </td>
            </tr>
          </tbody>
        ))}
      </table>

      <Button
        text="Return"
        width="25vw"
        height="2.8em"
        handleButton={handleGameOver}
      />
    </div>
  );
};

export default ScoresheetPage;
