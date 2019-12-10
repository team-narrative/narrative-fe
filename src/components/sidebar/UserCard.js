import React from 'react';
import PropTypes from 'prop-types';
import { useSignout } from '../../Auth0Provider';

const UserCard = ({ userName, userImage }) => {

  const logout = useSignout();
  const handleLogOut = () => {
    logout({
      returnTo: 'http://localhost:7890/stories'
    });
  };

  return (
    <section>
      <img src={userImage} alt={userName} />
      <h3>{userName}</h3>
      <button onClick={handleLogOut}>Logout</button>
    </section>
  );
};

UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired
};

export default UserCard;