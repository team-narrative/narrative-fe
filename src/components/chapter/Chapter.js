import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import styles from './Chapter.css';
import arrow from '../../assets/arrow.png';

const Chapter = ({ handleSubmit, currentChapterName, currentChapterDescription }) => {
  const [chapterName, setChapterName] = useState(currentChapterName);
  const [chapterDescription, setChapterDescription] = useState(currentChapterDescription);
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
    handleSubmit(chapterName, chapterDescription);
  };

  const toggle = () => {
    setHidden(!hidden);
  };

  return (
    <div className={styles.Chapter}>
      <img src={arrow} onClick={toggle} />
      {hidden ? <h2>{chapterName}</h2> : <form onSubmit={onSubmit}>
        <input type="text" value={chapterName} onChange={({ target }) => setChapterName(target.value)} required />
        <ReactQuill value={chapterDescription} onChange={(value) => setChapterDescription(value)} formats={formats} modules={modules} />
        <button>DONE</button>
      </form>}
    </div>
  );
};

Chapter.propTypes = {
  handleSubmit: PropTypes.func,
  currentChapterName: PropTypes.string,
  currentChapterDescription: PropTypes.string
};

export default Chapter;