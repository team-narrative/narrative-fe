import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import StoryNavigation from './StoryNavigation';

const Sidebar = ({ userName, userPicture, handleUserLogout, handleAddStory, handleSubmit }) => {
  const [stories, setStories] = useState([]);

  // function to set stories

  return (
    <aside>
      <UserCard userName={userName} userPicture={userPicture} handleUserLogout={handleUserLogout} />
      <StoryNavigation handleAddStory={handleAddStory} stories={stories} handleSubmit={handleSubmit} />
    </aside>
  );
};

Sidebar.propTypes = {
  userName: PropTypes.string.isRequired,
  userPicture: PropTypes.string.isRequired,
  handleUserLogout: PropTypes.func.isRequired,
  handleAddStory: PropTypes.func.isRequired,
  stories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string
  })),
  handleSubmit: PropTypes.func.isRequired
};

export default Sidebar;
