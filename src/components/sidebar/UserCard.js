import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ name, picture, handleLogout }) => {
  return (
    <section>
      <img src={picture} alt={name}/>
      <h3>{name}</h3>
      <button onClick={handleLogout}></button>
    </section>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired
};

export default UserCard;