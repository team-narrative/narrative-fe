import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';

const LocationList = ({ locations }) => {
  let storyLocations;
  if(locations.length > 0) {
    storyLocations = locations.map((locations, i) => {
      return (
        <li key={locations._id || i}>
          <Location currentLocationName={locations.LocationName} currentLocationDescription={locations.LocationDescription}/>
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Locations</h2>
      <ul>
        {storyLocations}
      </ul>
    </div>
  );
};

LocationList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object)
};

export default LocationList;