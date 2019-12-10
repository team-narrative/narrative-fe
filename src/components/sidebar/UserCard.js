import React from 'react';
import PropTypes from 'prop-types';
import { useSignout } from '../../Auth0Provider';
 
const UserCard = ({ userName, userPicture }) => {

  const logout = useSignout();
  const handleLogOut = () => {
    console.log('asdgasdg');
    logout({
      returnTo: 'http://localhost:7890/stories'
    });
  };

  return (
    <section>
      <img src={userPicture} alt={userName} />
      <h3>{userName}</h3>
      <button onClick={handleLogOut}>LOGOUT</button>
    </section>
  );
};

UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  userPicture: PropTypes.string.isRequired,
  handleUserLogout: PropTypes.func.isRequired
};

export default UserCard;