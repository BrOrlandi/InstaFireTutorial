import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Comment, Form } from 'semantic-ui-react';

import CommentItem from './CommentItem';

const commentsSample = [
  {
    key: 'c3',
    userId: '123',
    userPhoto: 'https://picsum.photos/48/?image=453',
    userName: 'João da Silva',
    message: 'Comentário teste 3',
  },
  {
    key: 'c4',
    userId: '1234',
    userPhoto: 'https://picsum.photos/48/?image=449',
    userName: 'Maria da Silva',
    message: 'Comentário teste 4',
  },
];

class CommentList extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    // Coloca comentários de exemplo no state
    this.setState({
      comments: commentsSample,
    });
  }

  onSubmitComment = (e) => {
    const commentText = e.target.comment.value;
    if (!commentText) {
      return;
    }

    const user = {
      displayName: 'Nome do usuário',
    };

    const newComment = {
      userId: user.uid,
      userPhoto: user.photoURL,
      userName: user.displayName,
      message: commentText,
    };

    const { comments } = this.state;

    const updatedComments = comments.concat(newComment);

    this.setState({
      comments: updatedComments,
    });

    e.target.comment.value = '';
  }

  render() {
    const { comments } = this.state;
    return (
      <Comment.Group>
        {comments.map(comment => (<CommentItem {...comment} />))}
        <Form onSubmit={this.onSubmitComment}>
          <Form.Group>
            <Form.Input placeholder="Comment..." name="comment" className="comment__input" required />
            <Form.Button icon="comment outline" className="comment__button" />
          </Form.Group>
        </Form>
      </Comment.Group>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array,
};

export default CommentList;
