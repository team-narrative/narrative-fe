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
import Footer from '../components/footer/Footer';


const Dashboard = () => {
  const stories = useSelector(state => getStoryList(state));
  const currentStory = useSelector(state => getCurrentStory(state));
  const userName = useSelector(state => getUserName(state));
  const userImage = useSelector(state => getUserImage(state));
  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useSession();
  const currentStoryTitle = currentStory.storyTitle;
  const currentStorySynopsis = currentStory.storySynopsis;

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const showModal1 = () => {
    setShow1(true);
  };

  const hideModal1 = () => {
    setShow1(false);
  };

  const showModal2 = () => {
    setShow2(true);
  };

  const hideModal2 = () => {
    setShow2(false);
  };

  const showModal3 = () => {
    setShow3(true);
  };

  const hideModal3 = () => {
    setShow3(false);
  };

  const showModal4 = () => {
    setShow4(true);
  };

  const hideModal4 = () => {
    setShow4(false);
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
          <CharacterCategory show={show1} hideModal={hideModal1} showModal={showModal1} />
          <ChapterCategory show={show2} hideModal={hideModal2} showModal={showModal2} />
        </div>

        <div className={styles.DashboardContainer}>
          <LocationCategory show={show3} hideModal={hideModal3} showModal={showModal3} />
          <WorldCategory show={show4} hideModal={hideModal4} showModal={showModal4} />
        </div>
      </main>
    </div>

  );
};

export default Dashboard;