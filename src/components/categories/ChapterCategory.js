import React from 'react';
import PropTypes from 'prop-types';
import ViewAllButton from './ViewAllButton';
import AddChapterButton from './AddChapterButton';

const ChapterCategory = ({ handleViewChapters, show, hideModal, showModal }) => {
  return (
    <section>
      <h2>Chapters</h2>

      <div>
        <AddChapterButton show={show} hideModal={hideModal} showModal={showModal} />
        <ViewAllButton handleViewClick={handleViewChapters} />
      </div>
    </section>
  );
};

ChapterCategory.propTypes = {
  handleViewChapters: PropTypes.func.isRequired,
  show: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func
};

export default ChapterCategory;