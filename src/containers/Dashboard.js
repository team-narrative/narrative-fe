import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';
// import CurrentStory from '../components/categories/CurrentStory';
// import CharacterCategory from '../components/categories/CharacterCategory';
// import ChapterCategory from '../components/categories/ChapterCategory';
// import LocationCategory from '../components/categories/LocationCategory';
// import WorldCategory from '../components/categories/WorldCategory';
import { getStoryList, getUserName, getUserImage } from '../selectors/storySelectors';
import { fetchStoryList } from '../actions/storyActions';
import DefaultViewModal from './DefaultView-Modal';

const Dashboard = () => {
  const stories = useSelector(state => getStoryList(state));
  const userName = useSelector(state => getUserName(state));
  const userImage = useSelector(state => getUserImage(state));

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStoryList());
  }, []);

  return (
    <div>
      <Sidebar stories={stories} userName={userName} userImage={userImage} />
      <DefaultViewModal show={show} handleClose={hideModal}>
        {/* <p>Modal</p>
        <p>Data</p> */}
      </DefaultViewModal>

      <button type='button' onClick={showModal}>Add Story</button>
      
      {/* <main>
        <CurrentStory />
        <CharacterCategory />
        <ChapterCategory />
        <LocationCategory />
        <WorldCategory />
      </main> */}
    </div>
  );
};

Dashboard.propTypes = {

};

export default Dashboard;