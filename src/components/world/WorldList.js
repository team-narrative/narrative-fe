import React from 'react';
import PropTypes from 'prop-types';
import World from './World';

const WorldList = ({ worlds }) => {
  let storyWorlds;
  if(worlds.length > 0) {
    storyWorlds = worlds.map((world, i) => {
      return (
        <li key={world._id || i}>
          <World currentWorldName={world.worldName} currentWorldDescription={world.worldDescription}/>
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