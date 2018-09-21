import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

class Likes extends Component {
  state = {
    likes: [],
  };

  componentDidMount() {
    // Sincronizar likes com o Firebase
  }

  isLikedPhoto = () => {
    const userId = 'id do usuario'; // trocar ID do usuário

    const { likes } = this.state;
    const liked = likes.includes(userId);

    return liked;
  }

  onClickHeart = () => {
    const { likes } = this.state;
    const userId = 'id do usuario'; // trocar ID do usuário

    const liked = this.isLikedPhoto();

    if (!liked) {
      const newLikes = likes.concat(userId);
      this.setState({
        likes: newLikes,
      });
      return;
    }

    const unliked = likes.filter(like => like !== userId);

    this.setState({
      likes: unliked,
    });
  };

  render() {
    const { likes } = this.state;

    const liked = this.isLikedPhoto();

    return (
      <div className="photo__likes">
        {!liked && <Icon name="heart outline" size="big" onClick={this.onClickHeart} />}
        {liked && <Icon name="heart" size="big" color="red" onClick={this.onClickHeart} />}
        {likes.length}
      </div>
    );
  }
}

Likes.propTypes = {
  photoKey: PropTypes.string,
};

export default Likes;
