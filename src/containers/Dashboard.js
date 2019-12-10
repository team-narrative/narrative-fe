import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';
import CurrentStory from '../components/categories/CurrentStory';
import CharacterCategory from '../components/categories/CharacterCategory';
import ChapterCategory from '../components/categories/ChapterCategory';
import LocationCategory from '../components/categories/LocationCategory';
import WorldCategory from '../components/categories/WorldCategory';
import { getStoryList, getUserName, getUserImage, getCurrentStory } from '../selectors/storySelectors';
import { fetchStoryList } from '../actions/storyActions';
import { useAuth0 } from '../Auth0Provider';
import styles from './Dashboard.css';

const Dashboard = () => {
  const stories = useSelector(state => getStoryList(state));
  const currentStory = useSelector(state => getCurrentStory(state));
  const userName = useSelector(state => getUserName(state));
  const userImage = useSelector(state => getUserImage(state));
  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useAuth0();

  const currentStoryTitle = currentStory.storyTitle;
  const currentStorySynopsis = currentStory.storySynopsis;

  useEffect(() => {
    if(!loading && isAuthenticated)
      dispatch(fetchStoryList());
  }, [loading, isAuthenticated]);

  return (
    <div className={styles.Dashboard}>
      <Sidebar stories={stories} userName={userName} userImage={userImage} />

      <main>
        <CurrentStory title={currentStoryTitle} synopsis={currentStorySynopsis} />

        <div className={styles.DashboardContainer}>
          <CharacterCategory />
          <ChapterCategory />
        </div>

        <div className={styles.DashboardContainer}>
          <LocationCategory />
          <WorldCategory />
        </div>
      </main>
    </div>
  );
};

Dashboard.propTypes = {

};

export default Dashboard;