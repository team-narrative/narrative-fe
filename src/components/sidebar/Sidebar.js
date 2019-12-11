import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import StoryNavigation from './StoryNavigation';
import styles from './Sidebar.css';

const Sidebar = ({ stories, userName, userImage }) => {

  return (
    <aside className={styles.Sidebar}>
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
