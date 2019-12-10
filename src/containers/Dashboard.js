import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';
// import CurrentStory from '../components/categories/CurrentStory';
// import CharacterCategory from '../components/categories/CharacterCategory';
// import ChapterCategory from '../components/categories/ChapterCategory';
// import LocationCategory from '../components/categories/LocationCategory';
// import WorldCategory from '../components/categories/WorldCategory';
import { getStoryList } from '../selectors/storySelectors';
import { fetchStoryList } from '../actions/storyActions';

const Dashboard = () => {
  const stories = useSelector(state => getStoryList(state));
  const dispatch = useDispatch();
  console.log(stories);
  useEffect(() => {
    dispatch(fetchStoryList());
  }, []);

  return (
    <div>
      {/* username and userpicture */}
      <Sidebar stories={stories} />
      
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