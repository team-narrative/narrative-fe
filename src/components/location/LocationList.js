import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Location from './Location';
import { getCurrentStoryId } from '../../selectors/storySelectors';
import { fetchLocationsByStoryId } from '../../actions/locationActions';
import { getCurrentStoryLocations } from '../../selectors/locationSelectors';

const LocationList = () => {
  const storyId = useSelector(state => getCurrentStoryId(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLocationsByStoryId(storyId));
  }, []);

  const locations = useSelector(state => getCurrentStoryLocations(state));

  let storyLocations;
  if(locations.length > 0) {
    storyLocations = locations.map((location, i) => {
      return (
        <li key={location._id || i}>
          <Location locationId={location._id} currentLocationName={location.locationName} currentLocationDescription={location.locationDescription}/>
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