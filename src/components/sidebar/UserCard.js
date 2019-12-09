import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserCard = ({ userName, userPicture }) => {

  return (
    <section>
      <img src={userPicture} alt={userName}/>
      <h3>{userName}</h3>
      <Link to={`https://${process.env.AUTH0_DOMAIN}/v2/logout`}>
        <button>LOGOUT</button>
      </Link>
    </section>
  );
};

UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  userPicture: PropTypes.string.isRequired,
  handleUserLogout: PropTypes.func.isRequired
};

export default UserCard;