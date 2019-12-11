import React from 'react';
import PropTypes from 'prop-types';
import ViewAllButton from './ViewAllButton';
import styles from './ChapterCategory.css';
import AddChapterButton from './AddChapterButton';

const ChapterCategory = ({ handleViewChapters, show, hideModal, showModal }) => {
  return (
    <section className={styles.ChapterCategory}>
      <h2>Chapters</h2>

      <div className={styles.ChapterCategoryContainer}>
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