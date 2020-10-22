import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components';
//styling
import './createBlog.scss';

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-post">
      <p className="title">Create New Blog Post</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea placeholder="Write Your Post Here" />
      <div className="link">
        <Link title="back" onClick={() => history.push('/')} />
      </div>
      <div className="button-action">
        <Button title="save" />
      </div>
    </div>
  );
};

export default CreateBlog;
