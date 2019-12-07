import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import styles from './Character.css';
import arrow from '../../assets/arrow.png';

const Character = ({ handleSubmit, currentName, currentDescription }) => {
  const [name, setName] = useState(currentName);
  const [description, setDescription] = useState(currentDescription);
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
    handleSubmit(name, description);
  };

  const toggle = () => {
    setHidden(!hidden);
  };

  return (
    <div className={styles.Character}>
      <img src={arrow} onClick={toggle} />
      {hidden ? <h2>{name}</h2> : <form onSubmit={onSubmit}>
        <input type="text" value={name} onChange={({ target }) => setName(target.value)} required />
        <ReactQuill value={description} onChange={(value) => setDescription(value)} formats={formats} modules={modules} />
        <button>DONE</button>
      </form>}
    </div>
  );
};

Character.propTypes = {
  handleSubmit: PropTypes.func,
  currentName: PropTypes.string,
  currentDescription: PropTypes.string
};

export default Character;