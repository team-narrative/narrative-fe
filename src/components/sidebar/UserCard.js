import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ userName, userPicture, handleUserLogout }) => {
  return (
    <section>
      <img src={userPicture} alt={userName}/>
      <h3>{userName}</h3>
      <button onClick={handleUserLogout}></button>
    </section>
  );
};

UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  userPicture: PropTypes.string.isRequired,
  handleUserLogout: PropTypes.func.isRequired
};

export default UserCard;