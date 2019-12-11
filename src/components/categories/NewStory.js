import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DefaultViewModal from '../../containers/default-view/DefaultView-Modal';

const NewStory = () => {

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <section>
      <div>
        <h2>Create New Story</h2>
        <DefaultViewModal show={show} hideModal={hideModal} />
        <button type='button' onClick={showModal}>New Story</button>
      </div>
    </section>
  );
};

NewStory.propTypes = {
  title: PropTypes.string,
  synopsis: PropTypes.string
};

export default NewStory;