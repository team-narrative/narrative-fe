import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';
import { fetchStoryList } from '../actions/storyActions';
import CurrentStory from '../components/categories/CurrentStory';
import CharacterCategory from '../components/categories/CharacterCategory';
import ChapterCategory from '../components/categories/ChapterCategory';
import LocationCategory from '../components/categories/LocationCategory';
import WorldCategory from '../components/categories/WorldCategory';


const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Sidebar />
      
      <main>
        <CurrentStory />
        <CharacterCategory />
        <ChapterCategory />
        <LocationCategory />
        <WorldCategory />
      </main>
    </div>
  );
};

Dashboard.propTypes = {

};

export default Dashboard;