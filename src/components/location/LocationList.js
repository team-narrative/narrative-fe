import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Location from './Location';
import { fetchLocationsByStoryId } from '../../actions/locationActions';
import { getCurrentStoryLocations } from '../../selectors/locationSelectors';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const LocationList = () => {
  const storyId = localStorage.getItem('storyId');
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
    <>
      <Header />
      <div>
        <h2>Locations</h2>
        <ul>
          {storyLocations}
        </ul>
      </div>
      <Footer />
    </>
  );
};

LocationList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object)
};

export default LocationList;