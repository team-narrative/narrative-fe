import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import styles from '../../containers/default-view/DefaultView-Modal.css';
import { createCharacter } from '../../actions/characterActions';
import { getCurrentStoryId } from '../../selectors/storySelectors';

const EditFormModalCharacter = ({ hideModal, show }) => {

  const dispatch = useDispatch();
  const characterStoryId = useSelector(state => getCurrentStoryId(state));
  console.log(characterStoryId);

  const [characterName, setcharacterName] = useState('');
  console.log(characterName);
  const [characterDescription, setcharacterDescription] = useState('');

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

  const handleChange = ({ target }) => {
    console.log(target.value);
    setcharacterName(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createCharacter(characterStoryId, characterName, characterDescription));
    setcharacterName('');
    setcharacterDescription('');
  };

  return (
    <div>
      <p>Create A New Character:</p>
      <div className={show ? styles.displayBlock : styles.displayNone} >
        <section className={styles.modalMain} >
          <form onSubmit={handleSubmit}>
            <p>{characterName}</p>
            Name:<input type="text" value={characterName} onChange={handleChange} />
            Description:<ReactQuill value={characterDescription} onChange={(value) => setcharacterDescription(value)} formats={formats} modules={modules} />
            <button value="button" onClick={hideModal}>Submit</button>
          </form>
          <button onClick={hideModal}>✗</button>
        </section>
      </div>
    </div>
  );
};

EditFormModalCharacter.propTypes = {
  hideModal: PropTypes.func,
  show: PropTypes.bool,
};

export default EditFormModalCharacter;