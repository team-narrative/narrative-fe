import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';

const EditForm = ({ handleSubmit }) => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

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
    event.preventDefault;
    handleSubmit(heading, description);
    
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={heading} placeholder="Write Name or Title" onChange={({ target }) => setHeading(target.value)} required />
      <ReactQuill value={description} onChange={(value) => setDescription(value)} formats={formats} modules={modules} />
      <button>SUBMIT</button>
    </form>
  );
};

EditForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default EditForm;