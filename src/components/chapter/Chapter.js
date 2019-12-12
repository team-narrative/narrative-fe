import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import styles from './Chapter.css';
import arrow from '../../assets/arrow.png';
import { editChapterByChapterId, destroyChapterById } from '../../actions/chapterActions';

const Chapter = ({ chapterId, currentChapterName, currentChapterText }) => {
  const [chapterName, setChapterName] = useState(currentChapterName);
  const [chapterText, setChapterText] = useState(currentChapterText);
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
    dispatch(editChapterByChapterId(chapterId, chapterName, chapterText));
  };

  const handleDelete = event => {
    event.preventDefault();
    dispatch(destroyChapterById(chapterId));
  };

  const toggle = () => {
    setHidden(!hidden);
  };

  return (
    <div className={styles.Chapter}>
      <img src={arrow} onClick={toggle} />
      {hidden ? <h2>{chapterName}</h2> : <form onSubmit={onSubmit}>
        <input type="text" value={chapterName} onChange={({ target }) => setChapterName(target.value)} required />
        <ReactQuill value={chapterText} onChange={(value) => setChapterText(value)} formats={formats} modules={modules} />
        <button>DONE</button>
        <button onClick={handleDelete} value="button">DELETE</button>
      </form>}
    </div>
  );
};

Chapter.propTypes = {
  handleSubmit: PropTypes.func,
  currentChapterName: PropTypes.string,
  currentChapterText: PropTypes.string,
  chapterId: PropTypes.string.isRequired
};

export default Chapter;