import React from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';
import ViewAllButton from './ViewAllButton';

const ChapterCategory = ({ handleAddChapter, handleViewChapters }) => {
  return (
    <section>
      <h2>Chapters</h2>

      <div>
        <AddButton handleAddClick={handleAddChapter} />
        <ViewAllButton handleViewClick={handleViewChapters} />
      </div>
    </section>
  );
};

ChapterCategory.propTypes = {
  handleAddChapter: PropTypes.func.isRequired,
  handleViewChapters: PropTypes.func.isRequired
};

export default ChapterCategory;