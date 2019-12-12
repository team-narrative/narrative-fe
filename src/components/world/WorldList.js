import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import World from './World';
import { fetchWorldsByStoryId } from '../../actions/worldActions';
import { getCurrentStoryWorlds } from '../../selectors/worldSelectors';

const WorldList = () => {
  const storyId = localStorage.getItem('storyId');
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchWorldsByStoryId(storyId));
  }, []);


  console.log(storyId);

  const worlds = useSelector(state => getCurrentStoryWorlds(state));
  let storyWorlds;
  if(worlds.length > 0) {
    storyWorlds = worlds.map((world, i) => {
      return (
        <li key={world._id || i}>
          <World worldId={world._id} currentWorldName={world.worldName} currentWorldDescription={world.worldDescription}/>
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Worlds</h2>
      <ul>
        {storyWorlds}
      </ul>
    </div>
  );
};

WorldList.propTypes = {
  worlds: PropTypes.arrayOf(PropTypes.object)
};

export default WorldList;