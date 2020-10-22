import React from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterBg } from '../../../assets';
import { Button, Gap } from '../../atoms';
//style
import './blogItem.scss';

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="thumbnail" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date post</p>
        <p className="body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Gap height={20} />
        <Button
          className="blog-item-btn"
          title="read more >>"
          onClick={() => history.push('/detail-blog')}
        />
      </div>
    </div>
  );
};

export default BlogItem;
