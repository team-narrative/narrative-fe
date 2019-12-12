import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Chapter from './Chapter';
import { getCurrentStoryId } from '../../selectors/storySelectors';
import { fetchChaptersByStoryId } from '../../actions/chapterActions';
import { getCurrentStoryChapters } from '../../selectors/chapterSelectors';

const ChapterList = () => {
  const storyId = useSelector(state => getCurrentStoryId(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChaptersByStoryId(storyId));
  }, []);

  console.log(storyId);
  
  const chapters = useSelector(state => getCurrentStoryChapters(state));

  let storyChapters;
  if(chapters.length > 0) {
    storyChapters = chapters.map((chapter, i) => {
      return (
        <li key={chapter._id || i}>
          <Chapter chapterId={chapter._id} currentChapterName={chapter.chapterName} currentChapterDescription={chapter.chapterDescription}/>
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