import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import styles from './Location.css';
import arrow from '../../assets/arrow.png';

const Location = ({ handleSubmit, currentLocationName, currentLocationDescription }) => {
  const [locationName, setLocationName] = useState(currentLocationName);
  const [locationDescription, setLocationDescription] = useState(currentLocationDescription);
  const [hidden, setHidden] = useState(true);

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const onSubmit = event => {
    event.preventDefault;
    handleSubmit(locationName, locationDescription);
  };

  const toggle = () => {
    setHidden(!hidden);
  };

  return (
    <div className={styles.Location}>
      <img src={arrow} onClick={toggle} />
      {hidden ? <h2>{locationName}</h2> : <form onSubmit={onSubmit}>
        <input type="text" value={locationName} onChange={({ target }) => setLocationName(target.value)} required />
        <ReactQuill value={locationDescription} onChange={(value) => setLocationDescription(value)} formats={formats} modules={modules} />
        <button>DONE</button>
      </form>}
    </div>
  );
};

Location.propTypes = {
  handleSubmit: PropTypes.func,
  currentLocationName: PropTypes.string,
  currentLocationDescription: PropTypes.string
};

export default Location;