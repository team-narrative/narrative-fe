import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import StoryNavigation from './StoryNavigation';

const Sidebar = ({ stories, userName, userImage }) => {

  return (
    <aside>
      <UserCard userName={userName} userImage={userImage} />
      <StoryNavigation stories={stories} />
    </aside>
  );
};

Sidebar.propTypes = {
  userName: PropTypes.string,
  userImage: PropTypes.string,
  stories: PropTypes.array
};

export default Sidebar;
