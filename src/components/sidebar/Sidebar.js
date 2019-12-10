import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import StoryNavigation from './StoryNavigation';

const Sidebar = ({ userName, userPicture, stories }) => {

  return (
    <aside>
      <UserCard userName={userName} userPicture={userPicture} />
      <StoryNavigation stories={stories} />
    </aside>
  );
};

Sidebar.propTypes = {
  userName: PropTypes.string.isRequired,
  userPicture: PropTypes.string.isRequired,
  stories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string
  })),
  handleSubmit: PropTypes.func.isRequired
};

export default Sidebar;
