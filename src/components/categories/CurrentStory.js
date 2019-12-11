import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DefaultViewModalEdit from '../../containers/default-view/DefaultView-Modal-Edit';

const CurrentStory = ({ title, synopsis }) => {

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
        <h2>{title}</h2>
        <DefaultViewModalEdit show={show} hideModal={hideModal} />
        <button type='button' onClick={showModal}>Edit Story</button>
      </div>

      <div>
        <p>{synopsis}</p>
      </div>
    </section>
  );
};

CurrentStory.propTypes = {
  title: PropTypes.string,
  synopsis: PropTypes.string
};

export default CurrentStory;