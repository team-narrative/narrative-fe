import React from 'react';
import PropTypes from 'prop-types';
import Chapter from './Chapter';

const ChapterList = ({ chapters }) => {
  let storyChapters;
  if(chapters.length > 0) {
    storyChapters = chapters.map((chapters, i) => {
      return (
        <li key={chapters._id || i}>
          <Chapter currentChapterName={chapters.chapterName} currentChapterDescription={chapters.chapterDescription}/>
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Chapters</h2>
      <ul>
        {storyChapters}
      </ul>
    </div>
  );
};

ChapterList.propTypes = {
  chapters: PropTypes.arrayOf(PropTypes.object)
};

export default ChapterList;