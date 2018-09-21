import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';

import defaultUserImage from '../assets/default-user-image.png';
import CommentList from './CommentList';
import Likes from './Likes';

const Photo = ({
  photoKey,
  userPicture,
  userName,
  imageSrc,
  description,
  timestamp,
}) => {
  const dateString = (new Date(timestamp)).toLocaleString();

  return (
    <Segment className="photo">
      <Header as="h4" className="photo__header">
        <Image src={userPicture || defaultUserImage} avatar />
        <span className="photo__header">
          <span>{userName}</span>
        </span>
        <span className="photo__date">{dateString}</span>
      </Header>
      <Image src={imageSrc} fluid />
      <div className="photo__footer">
        <Likes photoKey={photoKey} />
        <h3 className="photo__description">{description}</h3>
        <CommentList photoKey={photoKey} />
      </div>
    </Segment>
  );
};

Photo.propTypes = {
  userPicture: PropTypes.string,
  userName: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  timestamp: PropTypes.number,
  photoKey: PropTypes.string,
};

export default Photo;
