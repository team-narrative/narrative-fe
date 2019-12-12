import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import styles from './World.css';
import arrow from '../../assets/arrow.png';
import { editWorldByWorldId, destroyWorldById } from '../../actions/worldActions';

const World = ({ worldId, currentWorldName, currentWorldDescription }) => {
  const [worldName, setWorldName] = useState(currentWorldName);
  const [worldDescription, setWorldDescription] = useState(currentWorldDescription);
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch();

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
    event.preventDefault();
    dispatch(editWorldByWorldId(worldId, worldName, worldDescription));
  };

  const handleDelete = event => {
    event.preventDefault();
    dispatch(destroyWorldById(worldId));
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
        <button onClick={handleDelete} value="button">DELETE</button>
      </form>}
    </div>
  );
};

World.propTypes = {
  worldId: PropTypes.string,
  currentWorldName: PropTypes.string,
  currentWorldDescription: PropTypes.string
};

export default World;