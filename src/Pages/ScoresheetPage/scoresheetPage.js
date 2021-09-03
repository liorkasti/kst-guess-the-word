import React from 'react';
import { useSelector } from 'react-redux';

import './scoresheetPage.css';

const ScoresheetPage = () => {

  const { users } = useSelector((state) => state);

  return (
    <div className="card">
      {users.map((user, index) => (
        <div className="card-details">
          <p>{user.userName}      </p>
          {/* <p>{user.userPhone}     </p> */}
          <p>{user.userMaxScore}  </p>
        </div>
      ))}
    </div>
  );
};

export default ScoresheetPage;
