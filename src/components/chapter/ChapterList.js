import React from 'react';
import PropTypes from 'prop-types';
import Chapter from './Chapter';

const ChapterList = ({ chapters }) => {
  let storyChapters;
  if(chapters.length > 0) {
    storyChapters = chapters.map((chapter, i) => {
      return (
        <li key={chapter._id || i}>
          <Chapter currentChapterName={chapter.chapterName} currentChapterDescription={chapter.chapterDescription}/>
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