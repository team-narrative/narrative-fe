import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import StoryNavigation from './StoryNavigation';
import DefaultViewModal from '../../containers/default-view/DefaultView-Modal';
import styles from './Sidebar.css';

const Sidebar = ({ stories, userName, userImage }) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <aside className={styles.Sidebar}>
      <UserCard userName={userName} userImage={userImage} />
      <DefaultViewModal show={show} handleClose={hideModal} />
      <button type='button' onClick={showModal}>Add Story</button>
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
