import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';
import CurrentStory from '../components/categories/CurrentStory';
import CharacterCategory from '../components/categories/CharacterCategory';
import ChapterCategory from '../components/categories/ChapterCategory';
import LocationCategory from '../components/categories/LocationCategory';
import WorldCategory from '../components/categories/WorldCategory';
import NewStory from '../components/categories/NewStory';
import { getStoryList, getUserName, getUserImage, getCurrentStory } from '../selectors/storySelectors';
import { fetchStoryList } from '../actions/storyActions';
import { useSession } from '../Auth0Provider';
import styles from './Dashboard.css';

const Dashboard = () => {
  const stories = useSelector(state => getStoryList(state));
  const currentStory = useSelector(state => getCurrentStory(state));
  const userName = useSelector(state => getUserName(state));
  const userImage = useSelector(state => getUserImage(state));
  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useSession();
  const [show, setShow] = useState(false);
  const currentStoryTitle = currentStory.storyTitle;
  const currentStorySynopsis = currentStory.storySynopsis;

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  
  useEffect(() => {
    if(!loading && isAuthenticated)
      dispatch(fetchStoryList());
  }, [loading, isAuthenticated]);

  return (
    <div className={styles.Dashboard}>
      <Sidebar stories={stories} userName={userName} userImage={userImage} />

      <main>
        <NewStory title={currentStoryTitle} synopsis={currentStorySynopsis} />
        <CurrentStory title={currentStoryTitle} synopsis={currentStorySynopsis} />
    
        <div className={styles.DashboardContainer}>
          <CharacterCategory show={show} hideModal={hideModal} showModal={showModal} />
          <ChapterCategory show={show} hideModal={hideModal} showModal={showModal} />
        </div>

        <div className={styles.DashboardContainer}>
          <LocationCategory show={show} hideModal={hideModal} showModal={showModal} />
          <WorldCategory show={show} hideModal={hideModal} showModal={showModal} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;