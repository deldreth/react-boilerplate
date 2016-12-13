import React, { PropTypes } from 'react';

export default class Post extends React.Component {
  static propTypes = {
    post: PropTypes.object
  };

  render () {
    const { post } = this.props;

    return (
      <div className='col-md-12'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            {post.id}: {post.title}
          </div>
          <div className='panel-body'>
            {post.body}
          </div>
        </div>
      </div>
    );
  }
}
