import React from 'react';
import PropTypes from 'prop-types';
// import UserCard from './UserCard';
import StoryNavigation from './StoryNavigation';

const Sidebar = ({ stories }) => {
  // put this back later:  userPicture, userName, 

  return (
    <aside>
      {/* <UserCard userName={userName} userPicture={userPicture} /> */}
      <StoryNavigation stories={stories} />
    </aside>
  );
};

Sidebar.propTypes = {
  userName: PropTypes.string,
  userPicture: PropTypes.string,
  stories: PropTypes.array
};

export default Sidebar;
