import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import styles from './World.css';
import arrow from '../../assets/arrow.png';

const World = ({ handleSubmit, currentWorldName, currentWorldDescription }) => {
  const [worldName, setWorldName] = useState(currentWorldName);
  const [worldDescription, setWorldDescription] = useState(currentWorldDescription);
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
    handleSubmit(worldName, worldDescription);
  };

  const toggle = () => {
    setHidden(!hidden);
  };

  return (
    <div className={styles.World}>
      <img src={arrow} onClick={toggle} />
      {hidden ? <h2>{worldName}</h2> : <form onSubmit={onSubmit}>
        <input type="text" value={worldName} onChange={({ target }) => setWorldName(target.value)} required />
        <ReactQuill value={worldDescription} onChange={(value) => setWorldDescription(value)} formats={formats} modules={modules} />
        <button>DONE</button>
      </form>}
    </div>
  );
};

World.propTypes = {
  handleSubmit: PropTypes.func,
  currentWorldName: PropTypes.string,
  currentWorldDescription: PropTypes.string
};

export default World;